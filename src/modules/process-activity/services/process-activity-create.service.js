import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ProcessActivity from '../../../entities/process-activity.entities.js';  // Sua entidade de usuário
import StepProcessActivity from '../../../entities/steps-process.entities.js';
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';
import ShowProcessActivityService from './process-activity-show.service.js';
import ShowStatusService from '../../status/services/status-show.service.js';
import StepsShowService from '../../steps/services/steps-show.service.js';

const showProcessActivityService = new ShowProcessActivityService();
const showStatus = new ShowStatusService();
const showStep = new StepsShowService();


class CreateProcessActivityService {
  constructor() {
    this.ProcessActivityRepository = AppDataSource.getRepository(ProcessActivity);
    this.StepProcessRepository = AppDataSource.getRepository(StepProcessActivity);
  }

  async execute(body, id) {

    const show = await showProcessActivityService.execute(body.idProcess, body.idStep);

    for (let key in body) {
      if (body[key] === '') {
        body[key] = null;
      }
    }

    if (show) {
      //fazendo o update se já existir
      const process = await this.ProcessActivityRepository.save(body);


      if (process.idStep != null && process.idProcess != null) {

        this.updateStatus(body.status, body.idProcess, body.idStep, id);

        return { success: true, message: "Atividade Atualizada" }
      } else {
        return { success: false, message: "Atividade não Atualizada!" }
      }
    } else {
      //criando se não existir

      const processcreate = this.ProcessActivityRepository.create(body);

      if (!processcreate) {
        return { success: false, message: "Processo não criado!" }
      }
      // Salvar no banco
      const process = await this.ProcessActivityRepository.save(processcreate);


      if (process.idStep != null && process.idProcess != null) {


        this.updateStatus(process.status, process.idProcess, process.idStep, id);

        return { success: true, message: "Atividade Criada" }
      } else {

        return { success: false, message: "Id do processo não encontrado!" }
      }
    }
  }

  async updateStatus(status, idProcess, idStep, id) {

    const data = new Date();
    const statusInfos = await showStatus.execute(status);
    const statusInfo = statusInfos[0];

    if (statusInfo.closeStep == "S") {
      const uptStep = await this.StepProcessRepository.update(idStep, { status: status, closedAt: data })
      await this.updateDateStart(idProcess, idStep);
      await this.updateCodUsu(id, idProcess, idStep);
    } else {

      let statusUpdate = 5;

      if (status != '' || status != null) {
        statusUpdate = status;
      }
      const uptStep = await this.StepProcessRepository.update(idStep, { status: 5 })
    }
  }


  async updateDateStart(idProcess, idStep) {

    const data = new Date();
    const step = await showStep.execute(idProcess, idStep);
    const stepInfo = step[0];
    const nextOrder = stepInfo.orderby + 1;
    const stepUpdateNext = await showStep.getIdNextOrder(idProcess, nextOrder);

    if (stepUpdateNext.length > 0) {
      const stepInfoNext = stepUpdateNext[0];
      const nextId = stepInfoNext.id;
      const uptStepStart = await this.StepProcessRepository.update(nextId, { startAt: data, status: 2 })
    }
  }

  async updateCodUsu(id, idProcess, idStep) {
    const uptStep = await this.ProcessActivityRepository.update({ idStep, idProcess }, { codusufin: id });
  }

}

export default CreateProcessActivityService;
