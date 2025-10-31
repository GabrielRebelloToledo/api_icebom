import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ListComposicaoService from '../services/composicao/composicao-list.service.js';
import CreateComposicaoService from '../services/composicao/composicao-create.service.js';
import UpdateComposicaoService from '../services/composicao/composicao-update.service.js';
import DeleteComposicaoService from '../services/composicao/composicao-delete.service.js';


class ComposicaoController {

  async create(request, response) {

    const { idCab, idprod, qtde, active } = request.body;

    const create = container.resolve(CreateComposicaoService);

    const data = await create.execute({ idCab, idprod, qtde, active });

    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }

  async update(request, response) {

     

    const { id, idprod, qtde, active } = request.body;

    const update = container.resolve(UpdateComposicaoService);

    const data = await update.execute({ id, idprod, qtde, active });

    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }

  async list(request, response) {
    const { id } = request.params;

    const list = container.resolve(ListComposicaoService);
    const data = await list.execute(id);
    return response.json(data);
  }

  async listActive(request, response) {
    const list = container.resolve(ListComposicaoService);
    const data = await list.executeActive();
    return response.json(data);
  }

  async delete(request, response) {

    //console.log("Cheguei aqui")

    const id = request.params.id;
    const delet = container.resolve(DeleteComposicaoService);

    const data = await delet.execute(id);

    if (data && data.success === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }
    return response.status(200).json();
  }
}

export default new ComposicaoController();

