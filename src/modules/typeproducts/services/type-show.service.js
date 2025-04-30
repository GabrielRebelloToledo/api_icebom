import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Type from '../../../entities/type.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ShowTypeService {
    constructor() {
        this.TypeRepository = AppDataSource.getRepository(Type);
    }

    async execute(typeId) {

        /* console.log(processId, stepId) */

        const type = await this.TypeRepository.find({
            where: { id: typeId }
        });
        /* console.log(processShow) */
        return type;
    }

}

export default ShowTypeService;
