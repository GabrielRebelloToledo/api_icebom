import express from 'express';
import StepControllerController from '../controllers/forms.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const stepRoutes = express.Router();

stepRoutes.post('/', 
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    StepControllerController.create);

    stepRoutes.get('/list', 
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    StepControllerController.list);

    stepRoutes.get('/listform/:title', 
        ensureAuthenticated,
        ensureAuthorized([UserType.ADMIN]),
        StepControllerController.listnode);

export default stepRoutes;