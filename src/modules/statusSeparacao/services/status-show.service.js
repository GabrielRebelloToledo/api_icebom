import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import StatusSeparacao from '../../../entities/status-separacao.entites.js';

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ShowStatusService {
    constructor() {
        this.StatusRepository = AppDataSource.getRepository(StatusSeparacao);
    }

    async execute(statusId) {

        /* console.log(processId, stepId) */

        const showstatus = await this.StatusRepository.find({
            where: { id: statusId }
        });
        /* console.log(processShow) */
        return showstatus;
    }

}

export default ShowStatusService;
