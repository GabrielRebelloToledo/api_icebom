import express from 'express';
import ItensSeparacaoController from '../controllers/itens_separacao.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const separacaoItensRoutes = express.Router();

separacaoItensRoutes.post('/',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensSeparacaoController.create);

separacaoItensRoutes.post('/update',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensSeparacaoController.update);

separacaoItensRoutes.get('/list/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensSeparacaoController.list);


separacaoItensRoutes.get('/list/active',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensSeparacaoController.listActive);


separacaoItensRoutes.delete('/delete/:id',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensSeparacaoController.delete);


separacaoItensRoutes.post('/update/quantidade/produto/:id/:codbarras/:qtd/:status',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensSeparacaoController.updateQuantidade);

separacaoItensRoutes.post('/update/quantidade/produto/manual/separacao/:id/:idcab/:qtd/:status',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensSeparacaoController.updateQuantidadeManual);


separacaoItensRoutes.post('/update/quantidade/produto/limpar/separacao/:id/:idcab/:status',
    /* ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]), */
    ItensSeparacaoController.updateQuantidadeManual);

    
 


export default separacaoItensRoutes;