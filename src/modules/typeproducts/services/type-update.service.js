import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Type from '../../../entities/type.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class UpdateTypeService {
    constructor() {
        this.TypeRepository = AppDataSource.getRepository(Type);

    }

    async execute({ id, descrtype }) {

        // Salvar no banco
        const type = await this.TypeRepository.save({ id, descrtype });

        if (!type) {
            return { success: false, message: "Tipo não criado!" }
        }

        return { success: true, message: "Tipo Atualizado!" }

    }
}

export default UpdateTypeService;
