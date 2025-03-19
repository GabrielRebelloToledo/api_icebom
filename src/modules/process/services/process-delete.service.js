import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Process from '../../../entities/process.entities.js';  // Sua entidade de usuário
import StepsProcess from '../../../entities/steps-process.entities.js';
import StepProcessActivity from '../../../entities/process-activity.entities.js';
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class DeleteProcessService {
    constructor() {
        this.ProcessRepository = AppDataSource.getRepository(Process);
        this.StepProcessRepository = AppDataSource.getRepository(StepProcessActivity);
        this.StepsProcessRepository = AppDataSource.getRepository(StepsProcess);
    }

    async execute(id) {
        try {
            // Buscando steps para o processo
            const stepProcess = await this.StepProcessRepository.find({ where: { idProcess: id } });

            // Se existirem steps, realiza a exclusão
            if (stepProcess.length > 0) {
                for (const step of stepProcess) {
                    await this.StepProcessRepository.remove(step);
                }
            }

            // Exclui os steps e verifica o resultado
            const excluidoSteps = await this.excluirSteps(id);
            if (!excluidoSteps) {
                return { success: false, message: "Não foi possível excluir as atividades de processo." };
            }

            // Exclui o processo
            const excluidoProcesso = await this.excluirProcesso(id);
            if (!excluidoProcesso) {
                
                return { success: false, message: "Não foi possível excluir o processo." };
            }

            // Se tudo ocorreu bem
            return { success: true, message: "Atividade(s) de Processo(s) excluído(s) com sucesso!" };

        } catch (error) {
            console.error("Erro ao excluir o processo:", error);
            return { success: false, message: "Não foi possível excluir Atividade(s) de Processo(s)." };
        }
    }

    // Função que exclui o processo
    async excluirProcesso(id) {
        try {
            const process = await this.ProcessRepository.findOne({ where: { id: id } });

            if (!process) {
                return false;
            }

            await this.ProcessRepository.remove(process);
            return true;
        } catch (error) {
            console.error("Erro ao excluir processo:", error);
            return false;
        }
    }

    // Função que exclui os steps
    async excluirSteps(id) {
        try {
            const processStep = await this.StepsProcessRepository.find({ where: { idProcess: id } });

            // Se não houver steps, não há nada a remover
            if (processStep.length === 0) {
                return true;
            }

            // Se existirem steps, realiza a remoção
            for (const step of processStep) {
                await this.StepsProcessRepository.remove(step);
            }

            return true;

        } catch (error) {
            console.error("Erro ao excluir steps:", error);
            return false;
        }
    }
}

export default DeleteProcessService;
