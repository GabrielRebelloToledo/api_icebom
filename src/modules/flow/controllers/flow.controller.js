import { container } from 'tsyringe';
import { BAD_REQUEST, NO_CONTENT } from '../../../shared/infra/constants/http-status-code.constants.js';


import FlowService from '../services/flow.service.js';

class FlowController {

  async create(request, response) {
    
    //console.log(request.body); 

   const { userId, companieId} = request.body;

   const createUsersCompanieService = container.resolve(CreateUsersCompanieService);

   const userCompanie =  await createUsersCompanieService.execute({ userId, companieId });

   if(userCompanie && userCompanie.success === false){
     return response.status(BAD_REQUEST).json({ message: user.message });
   }

   return response.status(NO_CONTENT).json();
 }
 
  async list(request, response) {
    const listFlowService = container.resolve(FlowService);
    const flow = await listFlowService.execute();
    return response.json(flow);
  }
}

export default new FlowController();

