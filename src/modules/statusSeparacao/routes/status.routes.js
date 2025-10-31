import express from 'express';
import StatusController from '../controllers/status.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const statusSeparacaoRoutes = express.Router();

statusSeparacaoRoutes.post('/',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    StatusController.create);


statusSeparacaoRoutes.post('/update',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    StatusController.update);


statusSeparacaoRoutes.get('/list',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    StatusController.list);

statusSeparacaoRoutes.get('/show/:processId/:stepId',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    StatusController.show);


statusSeparacaoRoutes.delete('/delete/:id',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    StatusController.delete);



export default statusSeparacaoRoutes;