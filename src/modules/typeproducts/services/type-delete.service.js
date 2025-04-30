import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Type from '../../../entities/type.entities.js';

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class DeleteTypeService {
    constructor() {
        this.TypeRepository = AppDataSource.getRepository(Type);

    }

    async execute(id) {

        try {
            const type = await this.TypeRepository.findOne({ where: { id: id } });

            const typeDelete = await this.TypeRepository.remove(type);

            if (typeDelete.affected === 0) {

                return { success: false, message: "Tipo não Encontrado!" }
            }

            return { success: true, message: "Tipo Excluído!" }

        } catch (error) {

            return { success: false, message: "Não é possível excluir este Tipo." + error }
        }

    }
}

export default DeleteTypeService;
