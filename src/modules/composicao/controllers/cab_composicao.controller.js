import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ListCabComposicaoService from '../services/cab_composicao/cab-composicao-list.service.js';
import CreateCabComposicaoService from '../services/cab_composicao/cab-composicao-create.service.js';
import UpdateCabComposicaoService from '../services/cab_composicao/cab-composicao-update.service.js';
import DeleteCabComposicaoService from '../services/cab_composicao/cab-composicao-delete.service.js';


class CabComposicaoController {

  async create(request, response) {

    

    const { idprod, active } = request.body;

    const create = container.resolve(CreateCabComposicaoService);

    const data = await create.execute({ idprod, active });

    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }

  async update(request, response) {

     

    const { id, idprod, active } = request.body;

    const update = container.resolve(UpdateCabComposicaoService);

    const data = await update.execute({ id, idprod, active });

    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }

  async list(request, response) {
    const list = container.resolve(ListCabComposicaoService);
    const data = await list.execute();
    return response.json(data);
  }

  async listActive(request, response) {
    const list = container.resolve(ListCabComposicaoService);
    const data = await list.executeActive();
    return response.json(data);
  }

  async delete(request, response) {

    //console.log("Cheguei aqui")

    const id = request.params.id;
    const delet = container.resolve(DeleteCabComposicaoService);

    const data = await delet.execute(id);

    if (data && data.success === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }
    return response.status(200).json();
  }
}

export default new CabComposicaoController();

