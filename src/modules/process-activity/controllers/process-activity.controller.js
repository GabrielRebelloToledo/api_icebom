import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ProcessCreateServicevice from '../services/process-activity-create.service.js';
import ShowCreateServicevice from '../services/process-activity-show.service.js';

class ProcessActivityController {

  async create(request, response) {

    

    const createProcess = container.resolve(ProcessCreateServicevice);
    const process = await createProcess.execute(request.body, request.user.id);
    if (process && process.success === false) {
      return response.status(BAD_REQUEST).json({ message: process.message });
    }

    return response.status(CREATED).json();
  }

  async show(request, response) {
    const listFlowService = container.resolve(ShowCreateServicevice);
    const show = await listFlowService.execute(request.params.processId, request.params.stepId);
    return response.json(show);
  }

  /* async list(request, response) {
    const listFlowService = container.resolve(FlowService);
    const flow = await listFlowService.execute();
    return response.json(flow);
  } */
}

export default new ProcessActivityController();

