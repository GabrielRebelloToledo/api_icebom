import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ListStepFormService from '../services/list-form.service.js';
import ListStepFormNodeService from '../services/list-form-node.service.js';
import CreateStepService from '../services/form-create.service.js';

class StepFormControllerController {

  async create(request, response) {

    /* console.log(request.body); */

    const { title } = request.body;

    const createStepForm = container.resolve(CreateStepService);

    const stepform = await createStepForm.execute({ title });

    if (stepform && process.stepform === false) {
      return response.status(BAD_REQUEST).json({ message: product.message });
    }

    return response.status(CREATED).json();
  }

  async list(request, response) {
    const listStepService = container.resolve(ListStepFormService);
    const stepform = await listStepService.execute();
    return response.json(stepform);
  }

  async listnode(request, response) {
    const listStepNodeService = container.resolve(ListStepFormNodeService);
    const stepform = await listStepNodeService.execute(request.params.title);
    return response.json(stepform);
  }
}

export default new StepFormControllerController();

