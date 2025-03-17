import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Process from '../../../entities/process.entities.js';  // Sua entidade de usuário
import Steps from '../../../entities/steps.entities.js';
import StepsProcess from '../../../entities/steps-process.entities.js';
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class CreateFlowService {
  constructor() {
    this.ProcessRepository = AppDataSource.getRepository(Process);
    this.StepRepository = AppDataSource.getRepository(Steps);
    this.StepProcessRepository = AppDataSource.getRepository(StepsProcess);
  }

  async execute({ projeto, datapast, dataenvase, statusProcess }) {

    const processcreate = this.ProcessRepository.create({ projeto, datapast, dataenvase, statusProcess });

    if (!processcreate) {
      return { success: false, message: "Processo não criado!" }
    }

    // Salvar no banco
    const process = await this.ProcessRepository.save(processcreate);

    //console.log(process.id)

    if (process.id != null) {
      const criarSteps = this.criarSteps(process.id);

      if (!criarSteps) {
        return { success: false, message: "Fluxos não criados!" }
      } else {
        return { success: true, message: "Processos e Fluxos criados" }
      }
    } else {
      return { success: false, message: "Id do processo não encontrado!" }
    }

  }

  async criarSteps(id) {
    const steps = await this.StepRepository.find();

    const result = steps.map(step => {
      return {
        idProcess: id,
        orderby: step.orderby, // Supondo que tenha uma propriedade `order`
        label: step.label,   // Supondo que tenha uma propriedade `label`
        status: step.status, // Supondo que tenha uma propriedade `status`
        description: step.description // Supondo que tenha uma propriedade `description`
      };
    });


    const retorno = await this.StepProcessRepository.save(result);

    /*  console.log(retorno); */

  }




}

export default CreateFlowService;
