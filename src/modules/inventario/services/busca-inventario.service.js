
import { queryFirebird } from '../../../shared/infra/environments/environments.js';

import CreateCabSeparacaoService from '../../separacao/services/cab_separacao/cab-separacao-create.service.js';
import CreateItensSeparacaoService from '../../separacao/services/itens_separacao/itens-separacao-create.service.js';
import { container } from 'tsyringe';

class CapturaComposicaoService {


    async buscarInventariosLiberadosNaoImportados() {

        const sql = `SELECT * FROM INVENTARIO_ESTOQUE  WHERE TABLET_IMPORTOU = 'N' AND TABLET_IMPORTAR ='S'`;

        const rows = await queryFirebird(sql, []);

        for (const row of rows) {

            console.log(row)

            /* const datas = {
                id: Number(row.ID_PRODUCAO),
                idOp: Number(row.ID_PRODUCAO),
                idprod: row.COD_ITEM,
                qtdeprod: row.QUANT_KG,
                status: 3,
                observacao: '',
                name: row.DESC_PRO
            } */
            try {
               /*  const create = container.resolve(CreateCabSeparacaoService);
                const data = await create.executeMaxibom(datas);
                console.log(data);

                if (data) {
                    await this.buscarProdutosPorOps(row.ID_PRODUCAO);

                    await this.updateOPImportou(row.ID_PRODUCAO);

                } */

            } catch (e) {
                console.error("Ocorreu um erro ao inserir op: " + row.ID_PRODUCAO);
            }
        }

    }

    async buscarProdutosPorOps(id) {
        const sql = ` 
        select 
       ITENS.*
        from INVENTARIO_ESTOQUE INV join INVENTARIO_ITENS_ESTOQUE ITENS
        on INV.ID_INVENTARIO = ITENS.ID_INVENTARIO
        where   INV.TABLET_IMPORTOU = 'N' AND INV.TABLET_IMPORTAR ='S'
        order by ITENS.COD_PRO
        `;

        const rows = await queryFirebird(sql, [id]);

        for (const row of rows) {
            

            console.log("Itens: [....]")
            console.log(row)

            /* const datas = {
                idCabSep: Number(row.ID_SOLICITACAO),
                idprod: row.COD_CPRO,
                name: row.DESC_PRO,
                qtdeaseparar: row.QUANT_USADA,
                qtdeseparada: 0,
                qtdeconferida: 0,
                codvol: row.DESC_UND
            } */
            try {
               /*  const create = container.resolve(CreateItensSeparacaoService);
                const data = await create.execute(datas);
                console.log(data);

                if (data) {
                    this.buscarProdutosPorOps(row.ID_PRODUCAO);
                } */

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