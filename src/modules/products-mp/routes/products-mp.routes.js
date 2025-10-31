import express from 'express';
import ProductsControllerController from '../controllers/products-mp.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const productsMpRoutes = express.Router();

productsMpRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ProductsControllerController.create);

productsMpRoutes.post('/update',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ProductsControllerController.update);

productsMpRoutes.get('/list',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ProductsControllerController.list);

productsMpRoutes.get('/list/active',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ProductsControllerController.listActive);


productsMpRoutes.delete('/delete/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ProductsControllerController.delete);

export default productsMpRoutes;