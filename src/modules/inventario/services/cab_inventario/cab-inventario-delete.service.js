import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import CabSeparacao from '../../../../entities/cab_separacao.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class DeleteCabInventarioService {
    constructor() {
        this.Repository = AppDataSource.getRepository(CabSeparacao);

    }
    async execute(id) {

        try {
             
            const product = await this.Repository.findOne({ where: { id: id } });

            console.log(product)

            const productDelete = await this.Repository.remove(product);

            if (productDelete.affected === 0) {
                return { success: false, message: "Produto não Encontrado!" }
            }
            return { success: true, message: "Produto Excluído!" }

        } catch (error) {
            return { success: false, message: "Não é possível excluir este produto." + error }
        }

    }
}

export default DeleteCabInventarioService;
