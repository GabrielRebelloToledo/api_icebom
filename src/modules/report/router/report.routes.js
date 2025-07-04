import express from 'express';
import ReportController from '../controller/report.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const reportsRoutes = express.Router();

    reportsRoutes.get('/show/all/:processId/:nome',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]), */
    ReportController.showAll);

    reportsRoutes.get('/show/:processId/:stepId/:nome',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]), */
    ReportController.show);

    

export default reportsRoutes;