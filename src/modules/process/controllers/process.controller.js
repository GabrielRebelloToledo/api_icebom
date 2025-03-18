import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ProcessCreateService from '../services/process-create.service.js';
import ProcessListService from '../services/process-list.service.js';
import ProcessUpdateService from '../services/process-update.service.js';
class ProcessController {

  async create(request, response) {
    console.log(request.user)
    const { projeto, datapast, dataenvase, statusProcess } = request.body;
    const createProcess = container.resolve(ProcessCreateService);
    const process = await createProcess.execute({ projeto, datapast, dataenvase, statusProcess });

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


  async update(request, response) {


    //console.log("update")
    //console.log(request.user)
    const { id, projeto, datapast, dataenvase, statusProcess } = request.body;
    const updateProcess = container.resolve(ProcessUpdateService);
    const process = await updateProcess.execute({ id, projeto, datapast, dataenvase, statusProcess });

    if (process && process.success === false) {
      return response.status(BAD_REQUEST).json({ message: process.message });
    }

    return response.status(CREATED).json();
  }

}

export default new ProcessController();

