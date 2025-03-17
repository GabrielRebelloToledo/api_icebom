import express from 'express';
import ProcessActivityController from '../controllers/process-activity.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const processActivityRoutes = express.Router();

processActivityRoutes.post('/',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    ProcessActivityController.create);

processActivityRoutes.get('/show/:processId/:stepId',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    ProcessActivityController.show);

export default processActivityRoutes;