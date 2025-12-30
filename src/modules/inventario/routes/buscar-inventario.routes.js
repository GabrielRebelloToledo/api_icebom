import express from 'express';
import CapturarInventarioController from '../controllers/busca_inventario.controller.js'
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const inventarioImportarRoutes = express.Router();

inventarioImportarRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CapturarInventarioController.create);

export default inventarioImportarRoutes;