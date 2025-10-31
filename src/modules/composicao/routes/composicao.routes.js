import express from 'express';
import ComposicaoController from '../controllers/composicao.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const composicaoRoutes = express.Router();

composicaoRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ComposicaoController.create);

composicaoRoutes.post('/update',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ComposicaoController.update);

composicaoRoutes.get('/list/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ComposicaoController.list);

composicaoRoutes.get('/list/active',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ComposicaoController.listActive);


composicaoRoutes.delete('/delete/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ComposicaoController.delete);

export default composicaoRoutes;