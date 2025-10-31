import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ComposicaoMp from '../../../../entities/composicao.entities.js';

import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';


class UpdateComposicaoService {
    constructor() {
         this.Repository = AppDataSource.getRepository(ComposicaoMp);

    }

    async execute({ id, idprod, qtde, active }) {


        // Salvar no banco
        const products = await this.Repository.save({ id, idprod, qtde, active });

        if (!products) {
            return { success: false, message: "Produto não atualizado!" }
        }

        return { success: true, message: "Produto Atualizado!" }

    }
}

export default UpdateComposicaoService;
