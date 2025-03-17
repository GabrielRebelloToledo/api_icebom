import express from 'express';
import FlowControllerController from '../controllers/flow.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const flowRoutes = express.Router();

flowRoutes.get('/list', 
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    FlowControllerController.list);

export default flowRoutes;