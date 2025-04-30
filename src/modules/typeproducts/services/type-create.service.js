import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Type from '../../../entities/type.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class CreateTypeService {
    constructor() {
        this.TypeRepository = AppDataSource.getRepository(Type);

    }

    async execute({ descrtype }) {

         const type = this.TypeRepository.create({ descrtype });

        // Salvar no banco
        const types = await this.TypeRepository.save(type);

        if (!types) {
            return { success: false, message: "Tipo não criado!" }
        } 

        return { success: true, message: "Tipo criado!" } 

    }
}

export default CreateTypeService;
