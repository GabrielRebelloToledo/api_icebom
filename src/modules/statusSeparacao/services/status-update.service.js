import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import StatusSeparacao from '../../../entities/status-separacao.entites.js';

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class UpdateStatusService {
    constructor() {
        this.StatusRepository = AppDataSource.getRepository(StatusSeparacao);

    }

    async execute({ id, status, color, colorText }) {

        // Salvar no banco
        const statusc = await this.StatusRepository.save({ id, status, color, colorText });

        if (!statusc) {
            return { success: false, message: "Status não criado!" }
        }

        return { success: true, message: "Status criado!" }

    }
}

export default UpdateStatusService;
