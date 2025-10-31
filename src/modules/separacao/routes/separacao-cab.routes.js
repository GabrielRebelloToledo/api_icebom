import express from 'express';
import CabSeparacaoController from '../controllers/cab_separacao.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const separacaoCabRoutes = express.Router();

separacaoCabRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabSeparacaoController.create);

separacaoCabRoutes.post('/update',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabSeparacaoController.update);

separacaoCabRoutes.get('/list',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabSeparacaoController.list);

separacaoCabRoutes.get('/list/active',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabSeparacaoController.listActive);


separacaoCabRoutes.delete('/delete/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabSeparacaoController.delete);



separacaoCabRoutes.post('/update/separacao/status/:id/:codusu/:status',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabSeparacaoController.updateStatus);

export default separacaoCabRoutes;