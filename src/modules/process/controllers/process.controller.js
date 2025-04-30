import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ProcessCreateService from '../services/process-create.service.js';
import ProcessListService from '../services/process-list.service.js';
import ProcessUpdateService from '../services/process-update.service.js';
import ProcessDeleteService from '../services/process-delete.service.js';
import ProcessListResumoService from '../services/process-list-resumo.service.js';
/* Ajuste da Ordem */
import ProcessUpUpdateService from '../services/process-up-update.service.js';
import ProcessDownUpdateService from '../services/process-down-update.service.js';

class ProcessController {

  async create(request, response) {
    
    const { projeto, datapast, dataenvase, statusProcess,idtype, qtdcalda } = request.body;
    const createProcess = container.resolve(ProcessCreateService);
    const process = await createProcess.execute({ projeto, datapast, dataenvase, statusProcess,idtype, qtdcalda });

    if (process && process.success === false) {
      return response.status(BAD_REQUEST).json({ message: process.message });
    }

    return response.status(CREATED).json();
  }

  async list(request, response) {

    const listProcessService = container.resolve(ProcessListService);
    const list = await listProcessService.execute(request.params.type);
    return response.json(list);
  }

  async listResumo(request, response) {

    const listProcessService = container.resolve(ProcessListResumoService);
    const list = await listProcessService.execute(request.params.type);
    return response.json(list);
  }

  async listResumoSum(request, response) {

    const listProcessService = container.resolve(ProcessListResumoService);
    const list = await listProcessService.executeSum(request.params.type);
    return response.json(list);
  }


  async update(request, response) {

    //console.log("update")
    //console.log(request.user)
    const { id, projeto, datapast, dataenvase, statusProcess,idtype, qtdcalda  } = request.body;
    const updateProcess = container.resolve(ProcessUpdateService);
    const process = await updateProcess.execute({ id, projeto, datapast, dataenvase, statusProcess,idtype, qtdcalda });

    if (process && process.success === false) {
      return response.status(BAD_REQUEST).json({ message: process.message });
    }

    return response.status(CREATED).json();
  }

  async delete(request, response) {

    console.log(request.params);

    const id = request.params.id;
    const deleteProcessService = container.resolve(ProcessDeleteService);

    const process = await deleteProcessService.execute(id);

    if (process && process.success === false) {
      return response.status(BAD_REQUEST).json({ message: process.message });
    }
    return response.status(200).json();
  }


  async upHierarquia(request, response) {
    console.log("Cheguei aqui")
    
    const id = request.params.id;
    console.log(id)
    const updateProcess = container.resolve(ProcessUpUpdateService);
    const process = await updateProcess.execute(id);

    if (process && process.success === false) {
      return response.status(BAD_REQUEST).json({ message: process.message });
    }

    return response.status(CREATED).json();
  }

  async downHierarquia(request, response) {

    const id = request.params.id;
    const updateProcess = container.resolve(ProcessDownUpdateService);
    const process = await updateProcess.execute(id);

    if (process && process.success === false) {
      return response.status(BAD_REQUEST).json({ message: process.message });
    }

    return response.status(CREATED).json();
  }

}

export default new ProcessController();

