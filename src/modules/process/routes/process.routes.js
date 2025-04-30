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

processRoutes.get('/listresumo/:type',
        ensureAuthenticated,
        ensureAuthorized([UserType.ADMIN, UserType.USER]),
        ProcessControllerController.listResumo);

processRoutes.get('/listresumosum/:type',
        ensureAuthenticated,
        ensureAuthorized([UserType.ADMIN, UserType.USER]),
        ProcessControllerController.listResumoSum);

        

processRoutes.post('/update',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    ProcessControllerController.update);

processRoutes.post('/update/up/:id',
   /*  ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]), */
    ProcessControllerController.upHierarquia);

processRoutes.post('/update/down/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]), */
    ProcessControllerController.downHierarquia);

processRoutes.delete('/delete/:id',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    ProcessControllerController.delete);

export default processRoutes;