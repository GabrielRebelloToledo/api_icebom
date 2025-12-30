import express from 'express';
import ItensInventarioController from '../controllers/itens_inventario.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const separacaoItensRoutes = express.Router();

separacaoItensRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensInventarioController.create);

separacaoItensRoutes.post('/update',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensInventarioController.update);

separacaoItensRoutes.get('/list/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensInventarioController.list);


separacaoItensRoutes.get('/list/active',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensInventarioController.listActive);


separacaoItensRoutes.delete('/delete/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensInventarioController.delete);


separacaoItensRoutes.post('/update/quantidade/produto/:id/:codbarras/:qtd/:status',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensInventarioController.updateQuantidade);

separacaoItensRoutes.post('/update/quantidade/produto/manual/separacao/:id/:idcab/:qtd/:status',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensInventarioController.updateQuantidadeManual);


separacaoItensRoutes.post('/update/quantidade/produto/limpar/separacao/:id/:idcab/:status',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensInventarioController.updateQuantidadeLimpar);

    
 


export default separacaoItensRoutes;