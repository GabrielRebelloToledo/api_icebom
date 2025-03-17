import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Process from '../../../entities/process.entities.js';  // Sua entidade de usuário
import Steps from '../../../entities/steps.entities.js';
import StepsProcess from '../../../entities/steps-process.entities.js';
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class UpdateService {
    constructor() {
        this.ProcessRepository = AppDataSource.getRepository(Process);
    }

    async execute({ id, projeto, datapast, dataenvase, statusProcess }) {

        // Salvar no banco
        const process = await this.ProcessRepository.save({ id, projeto, datapast, dataenvase, statusProcess });


        if (!process) {
            return { success: false, message: "Processo atualizado!!" }
        } else {
            return { success: true, message: "Erro ao Atualizar Processo" }
        }

    }

}

export default UpdateService;
