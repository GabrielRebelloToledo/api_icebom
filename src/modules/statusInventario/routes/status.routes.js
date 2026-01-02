import express from 'express';
import StatusController from '../controllers/status.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const statusInventarioRoutes = express.Router();

statusInventarioRoutes.post('/',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    StatusController.create);


statusInventarioRoutes.post('/update',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    StatusController.update);


statusInventarioRoutes.get('/list',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    StatusController.list);

statusInventarioRoutes.get('/show/:processId/:stepId',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    StatusController.show);


statusInventarioRoutes.delete('/delete/:id',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    StatusController.delete);



export default statusInventarioRoutes;