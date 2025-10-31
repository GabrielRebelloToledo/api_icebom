import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ProductsMP from '../../../entities/products_mp.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class DeleteProductService {
    constructor() {
        this.ProductsRepository = AppDataSource.getRepository(ProductsMP);

    }

    async execute(id) {

        try {
            const product = await this.ProductsRepository.findOne({ where: { id: id } });

            const productDelete = await this.ProductsRepository.remove(product);

            if (productDelete.affected === 0) {
                return { success: false, message: "Produto não Encontrado!" }
            }
            return { success: true, message: "Produto Excluído!" }

        } catch (error) {
            return { success: false, message: "Não é possível excluir este produto." + error }
        }

    }
}

export default DeleteProductService;
