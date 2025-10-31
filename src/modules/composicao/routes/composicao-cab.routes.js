import express from 'express';
import CabComposicaoController from '../controllers/cab_composicao.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const composicaoCabRoutes = express.Router();

composicaoCabRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabComposicaoController.create);

composicaoCabRoutes.post('/update',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabComposicaoController.update);

composicaoCabRoutes.get('/list',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabComposicaoController.list);

composicaoCabRoutes.get('/list/active',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabComposicaoController.listActive);


composicaoCabRoutes.delete('/delete/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabComposicaoController.delete);

export default composicaoCabRoutes;