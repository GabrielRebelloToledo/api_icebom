import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import StepProcess from '../../../entities/steps-process.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class StepsShowService {
    constructor() {
        this.StepsRepository = AppDataSource.getRepository(StepProcess);
    }

    async execute(processId, stepId) {

        /* console.log(processId, stepId) */


        const stepsShow = await this.StepsRepository.find({
            where: { idProcess: processId, id: stepId }
        });
        /* console.log(processShow) */
        return stepsShow;
    }

    async getIdNextOrder(processId, orderby) {

        /* console.log(processId, stepId) */


        const stepsNextShow = await this.StepsRepository.find({
            where: { idProcess: processId, orderby: orderby }
        });
        /* console.log(processShow) */
        return stepsNextShow;
    }

}

export default StepsShowService;
