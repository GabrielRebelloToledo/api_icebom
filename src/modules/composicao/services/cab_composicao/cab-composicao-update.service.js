import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import CabComposicao from '../../../../entities/cab_composicao.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class UpdateCabComposicaoService {
    constructor() {
        this.Repository = AppDataSource.getRepository(CabComposicao);

    }

    async execute({ id, idprod, active }) {


        // Salvar no banco
        const products = await this.ProductsRepository.save({ id, idprod, active });

        if (!products) {
            return { success: false, message: "Produto não atualizado!" }
        }

        return { success: true, message: "Produto Atualizado!" }

    }
}

export default UpdateCabComposicaoService;
