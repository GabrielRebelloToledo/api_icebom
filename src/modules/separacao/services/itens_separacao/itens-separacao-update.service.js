import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ItensSeparacao from '../../../../entities/itens_separacao.entities.js';
import ProductsMP from '../../../../entities/products_mp.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class UpdateItensSeparacaoService {
    constructor() {
        this.Repository = AppDataSource.getRepository(ItensSeparacao);
        this.ProductsRepository = AppDataSource.getRepository(ProductsMP);
    }

    async execute({ id, idCabSep, idprod, qtdeaseparar, qtdeseparada, qtdeconferida }) {


        // Salvar no banco
        const products = await this.ProductsRepository.save({ id, idCabSep, idprod, qtdeaseparar, qtdeseparada, qtdeconferida });

        if (!products) {
            return { success: false, message: "Produto não atualizado!" }
        }

        return { success: true, message: "Produto Atualizado!" }

    }


    async atualizaQuantidade({ id, codbarras, qtd, status }) {

        const produtoMP = await this.ProductsRepository.findOne({ where: { codbarras: codbarras } });
        const CodigodoProdutoMp = produtoMP.id;

        console.log(produtoMP);
        const listaSeparacao = await this.Repository.findOne({ where: { idprod: CodigodoProdutoMp, idCabSep: id } });
        console.log(listaSeparacao);

        if (Number(status) === 6) {
            listaSeparacao.qtdeseparada = qtd;
            await this.Repository.save(listaSeparacao);
            return { sucesso: true, mensagem: 'Item incluído.' };

        }
        if (Number(status) === 8) {
            listaSeparacao.qtdeconferida = qtd;
            await this.Repository.save(listaSeparacao);
            return { sucesso: true, mensagem: 'Item incluído.' };
        }
        else {
            return { sucesso: false, mensagem: 'Ativade com Status Incorreto de Inclusão!' };
        }
    }

    async atualizaQuantidadeManual({ id, idcab, qtd, status }) {

 
        const listaSeparacao = await this.Repository.findOne({ where: { id: id, idCabSep: idcab  } });
        console.log(listaSeparacao);

        if (Number(status) === 6) {
            listaSeparacao.qtdeseparada = (Number(listaSeparacao.qtdeseparada) + Number(qtd));
            await this.Repository.save(listaSeparacao);
            return { sucesso: true, mensagem: 'Item incluído.' };

        }
        if (Number(status) === 8) {
            listaSeparacao.qtdeconferida = (Number(listaSeparacao.qtdeconferida) + Number(qtd));
            await this.Repository.save(listaSeparacao);
            return { sucesso: true, mensagem: 'Item incluído.' };
        }
        else {
            return { sucesso: false, mensagem: 'Ativade com Status Incorreto de Inclusão!' };
        }
    }

}

export default UpdateItensSeparacaoService;
