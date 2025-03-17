import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ProcessActivity from '../../../entities/process-activity.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ShowProcessActivityService {
    constructor() {
        this.ProcessShowActivityRepository = AppDataSource.getRepository(ProcessActivity);
    }

    async execute(processId, stepId) {

        const processShow = await this.ProcessShowActivityRepository.find({
            where: { idProcess: processId, idStep: stepId }
        });
        return processShow;
    }

}

export default ShowProcessActivityService;
