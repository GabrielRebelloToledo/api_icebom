
import { queryFirebird } from '../../../shared/infra/environments/environments.js';

import CreateCabSeparacaoService from '../../separacao/services/cab_separacao/cab-separacao-create.service.js';
import CreateItensSeparacaoService from '../../separacao/services/itens_separacao/itens-separacao-create.service.js';
import { container } from 'tsyringe';

class CapturaComposicaoService {


    async buscarInventariosLiberadosNaoImportados() {

        const sql = `SELECT ID_INVENTARIO, DATA FROM INVENTARIO_ESTOQUE  WHERE (TABLET_IMPORTOU = 'N' OR TABLET_IMPORTOU IS NULL)  AND TABLET_IMPORTAR ='S'`;

        //const sql = `SELECT FIRST 10 * FROM INVENTARIO_ESTOQUE`


        const rows = await queryFirebird(sql, []);

        /* INVENTARIO_ESTOQUE
        { 
            ID_INVENTARIO: 2,
            DATA: 2025-12-31T00:00:00.000Z,
            USUARIO: 'ADMINISTRADOR',
            STATUS_PROCESSADO: 'N',
            HORA: '08:34:11',
            DATA_PROCESSAMENTO: null,
            HORA_PROCESSAMENTO: null,
            QUEM_PROCESSOU: null,
            TABLET_IMPORTAR: 'S',
            TABLET_IMPORTOU: null
        }
        */

        console.log("Cheguei aqui! Inventario")
        console.log(rows)

        for (const row of rows) {


            const datas = {
                id: Number(row.ID_INVENTARIO),
                data: row.DATA,
                status: 'Aberto',
            }

            try {

                console.log("-------------CABEÇALHO INICIO------------------")
                console.log(datas)
                console.log("-------------CABEÇALHO FIM------------------")
                await this.buscarProdutosPorOps(row.ID_INVENTARIO);

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
        const sql = ` SELECT ID_INVENTARIO_ITENS,ID_INVENTARIO, COD_PRO,  DESC_PRO, QUANT, LOCAL_ARMAZENAGEM, ESTOQUE, DIFERENCA, TIPO_ITEM, SIMB_UND FROM INVENTARIO_ITENS_ESTOQUE WHERE ID_INVENTARIO = ?`;

        const rows = await queryFirebird(sql, [id]);


        /* INVENTARIO_ITENS_ESTOQUE
        {
            ID_INVENTARIO_ITENS: 1,
            ID_INVENTARIO: 1,
            COD_PRO: '0010',
            DESC_PRO: 'LOSLOS - DEXTROSE',
            QUANT: null,
            LOCAL_ARMAZENAGEM: null,
            ESTOQUE: 0,
            DIFERENCA: null,
            TIPO_ITEM: 'M',
            SIMB_UND: 'QUILO',
            VLR_CUSTO: null,
            VLR_CUSTO2: 0
        } 
            */


        console.log("Itens: [....]")
        console.log(rows)

        for (const row of rows) {


            const datas = {
                idCabInvent: Number(row.ID_INVENTARIO),
                idItem: Number(row.ID_INVENTARIO_ITENS),
                idprod: row.COD_PRO,
                codprod: row.DESC_PRO,
                descricaoprod: row.DESC_PRO,
                quantidade: row.QUANT,
                local: row.LOCAL_ARMAZENAGEM,
                estoque: row.ESTOQUE,
                diferenca: 0,
                tipoitem: row.TIPO_ITEM,
                unidade: row.SIMB_UND,
            }




            try {

                console.log("-------------ITENS INICIO------------------")
                console.log(datas)
                console.log("-------------ITENS FIM------------------")

                /*  const create = container.resolve(CreateItensSeparacaoService);
                 const data = await create.execute(datas);
                 console.log(data);
 
                 if (data) {
                     this.buscarProdutosPorOps(row.ID_PRODUCAO);
                 } */

            } catch (e) {
                console.error("Ocorreu um erro ao inserir inventário: " + row.ID_INVENTARIO);
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