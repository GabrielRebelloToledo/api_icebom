import express from 'express';
import ProcessControllerController from '../controllers/process.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const processRoutes = express.Router();

processRoutes.post('/',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    ProcessControllerController.create);

processRoutes.get('/list/:type',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    ProcessControllerController.list);

processRoutes.post('/update',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    ProcessControllerController.update);

export default processRoutes;