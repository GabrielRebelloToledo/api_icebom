import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Products from '../../../entities/products.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class UpdateProductService {
    constructor() {
        this.ProductsRepository = AppDataSource.getRepository(Products);

    }

    async execute({ id, name, active }) {


        // Salvar no banco
        const products = await this.ProductsRepository.save({ id, name, active });

        if (!products) {
            return { success: false, message: "Produto não atualizado!" }
        }

        return { success: true, message: "Produto Atualizado!" }

    }
}

export default UpdateProductService;
