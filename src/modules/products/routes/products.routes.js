import express from 'express';
import ProductsControllerController from '../controllers/products.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const productsRoutes = express.Router();

productsRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ProductsControllerController.create);

productsRoutes.post('/update',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ProductsControllerController.update);

productsRoutes.get('/list',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ProductsControllerController.list);

productsRoutes.get('/list/active',
        /* ensureAuthenticated,
        ensureAuthorized([UserType.ADMIN]), */
        ProductsControllerController.listActive);
    

productsRoutes.delete('/delete/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ProductsControllerController.delete);

export default productsRoutes;