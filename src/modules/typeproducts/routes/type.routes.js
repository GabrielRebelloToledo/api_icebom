import express from 'express';
import typeController from '../controllers/type.controller.js';
import ensureAuthenticated from '../../../shared/middlewares/ensure-authenticated.middleware.js'
import ensureAuthorized from '../../../shared/middlewares/ensure-authorized.middleware.js'
import UserType from '../../user/enums/EUsers.js';

const typeRoutes = express.Router();

typeRoutes.post('/',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    typeController.create);


    typeRoutes.post('/update',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    typeController.update);


    typeRoutes.get('/list',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN, UserType.USER]),
    typeController.list);

    typeRoutes.delete('/delete/:id',
    ensureAuthenticated,
    ensureAuthorized([UserType.ADMIN]),
    typeController.delete);



export default typeRoutes;