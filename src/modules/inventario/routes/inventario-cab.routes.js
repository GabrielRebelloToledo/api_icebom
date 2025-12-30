import express from 'express';
import CabInventarioController from '../controllers/cab_inventario.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const inventarioCabRoutes = express.Router();

inventarioCabRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabInventarioController.create);

inventarioCabRoutes.post('/update',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabInventarioController.update);

inventarioCabRoutes.get('/list',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabInventarioController.list);

inventarioCabRoutes.get('/list/active',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabInventarioController.listActive);


inventarioCabRoutes.delete('/delete/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabInventarioController.delete);



inventarioCabRoutes.post('/update/separacao/status/:id/:codusu/:status',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    CabInventarioController.updateStatus);

export default inventarioCabRoutes;