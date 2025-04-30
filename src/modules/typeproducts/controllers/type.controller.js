import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';

import CreateTypeService from '../services/type-create.service.js';
import UpdateTypeService from '../services/type-update.service.js';
import ShowTypeService from '../services/type-show.service.js';
import ListTypeService from '../services/type-list.service.js';
import DeleteTypeService from '../services/type-delete.service.js';
class TypeController {

  async create(request, response) {
    
    const { descrtype } = request.body;

    const createType = container.resolve(CreateTypeService);
    const ctypeproduct = await createType.execute({ descrtype });
    if (ctypeproduct && ctypeproduct.success === false) {
      return response.status(BAD_REQUEST).json({ message: ctypeproduct.message });
    }

    return response.status(CREATED).json();
  }


  async update(request, response) {

    const { id,descrtype } = request.body;

    const updateType = container.resolve(UpdateTypeService);
    const utypeproduct = await updateType.execute({ id, descrtype });
    if (utypeproduct && utypeproduct.success === false) {
      return response.status(BAD_REQUEST).json({ message: utypeproduct.message });
    }

    return response.status(CREATED).json();
  }

  async show(request, response) {
    const showService = container.resolve(ShowTypeService);
    const show = await showService.execute(request.params.typeproductId);
    /*  console.log(show) */
    return response.json(show);
  }

  async list(request, response) {
    const listType = container.resolve(ListTypeService);
    const typeproduct = await listType.execute();
    return response.json(typeproduct);
  }

  async delete(request, response) {


    const id = request.params.id;
    const deleteTypeService = container.resolve(DeleteTypeService);

    const typeproduct = await deleteTypeService.execute(id);


    if (typeproduct.success) {

      return response.json(typeproduct);
    }

    return response.status(400).json({ typeproduct });
    // Retorna a resposta corretamente

  }
}

export default new TypeController();

