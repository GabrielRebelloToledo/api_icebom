import express from 'express';
import CapturarComposicaoController from '../controller/capturar-composicao.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const separacaoImportarRoutes = express.Router();

separacaoImportarRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CapturarComposicaoController.create);

export default separacaoImportarRoutes;