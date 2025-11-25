
import { queryFirebird } from '../../../shared/infra/environments/environments.js';

import CreateCabSeparacaoService from '../../separacao/services/cab_separacao/cab-separacao-create.service.js';
import CreateItensSeparacaoService from '../../separacao/services/itens_separacao/itens-separacao-create.service.js';
import { container } from 'tsyringe';
class CapturaComposicaoService {


    async buscarOpsLiberadasNaoImportadas() {

        const sql = `SELECT P.*, sp.DESC_PRO FROM SOLICITACAO_PRODUCAO P INNER JOIN SIV_PRO sp ON P.COD_ITEM = sp.COD_PRO  WHERE P.TABLET_IMPORTOU = 'N' AND P.TABLET_IMPORTAR ='S'`;

        const rows = await queryFirebird(sql, []);

        for (const row of rows) {

            const datas = {
                id: Number(row.ID_PRODUCAO),
                idOp: Number(row.ID_PRODUCAO),
                idprod: row.COD_ITEM,
                qtdeprod: row.QUANT_KG,
                status: 3,
                observacao: '',
                name: row.DESC_PRO
            }
            try {
                const create = container.resolve(CreateCabSeparacaoService);
                const data = await create.executeMaxibom(datas);
                console.log(data);

                if (data) {
                    await this.buscarProdutosPorOps(row.ID_PRODUCAO);

                    await this.updateOPImportou(row.ID_PRODUCAO);

                }

            } catch (e) {
                console.error("Ocorreu um erro ao inserir op: " + row.ID_PRODUCAO);
            }
        }

    }

    async buscarProdutosPorOps(id) {
        const sql = ` 
        select 
        ITENS.ID_SOL_PROD_ITENS,
        ITENS.ID_SOLICITACAO,
        ITENS.COD_CPRO,
        ITENS.QUANT_USADA,
        ITENS.DATA_FABRICACAO,
        ITENS.NUM_LOTE,
        ITENS.CUSTO_UNIT,
        ITENS.NIVEL,
        MPRIMA.DESC_PRO,
        MPRIMA.DESC_UND
        from SOLICITACAO_PRODUCAO_ITENS ITENS
        join SIV_CPRO MPRIMA on ITENS.COD_CPRO = MPRIMA.COD_PRO
        where ITENS.ID_SOLICITACAO = ? and ITENS.QUANT_USADA > 0
        order by ITENS.ID_SOL_PROD_ITENS
        `;

        const rows = await queryFirebird(sql, [id]);

        for (const row of rows) {

            const datas = {
                idCabSep: Number(row.ID_SOLICITACAO),
                idprod: row.COD_CPRO,
                name: row.DESC_PRO,
                qtdeaseparar: row.QUANT_USADA,
                qtdeseparada: 0,
                qtdeconferida: 0,
                codvol: row.DESC_UND
            }
            try {
                const create = container.resolve(CreateItensSeparacaoService);
                const data = await create.execute(datas);
                console.log(data);

                if (data) {
                    this.buscarProdutosPorOps(row.ID_PRODUCAO);
                }

            } catch (e) {
                console.error("Ocorreu um erro ao inserir op: " + row.ID_PRODUCAO);
            }
        }


    }

    async updateOPImportou(id) {


        try {
            const sql = `UPDATE SOLICITACAO_PRODUCAO SET TABLET_IMPORTOU = 'S' WHERE ID_PRODUCAO = ?`;
            const rows = await queryFirebird(sql, [id]);
            console.log(rows)
        } catch (error) {

            console.error("Ocorreu um erro ao realizar o Update na importação da OP: " + error)
        }


    }


}


export default CapturaComposicaoService;