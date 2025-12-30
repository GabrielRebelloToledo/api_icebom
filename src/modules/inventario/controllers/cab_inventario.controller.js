import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ListCabInventarioService from '../services/cab_inventario/cab-inventario-list.service.js';
import CreateCabInventarioService from '../services/cab_inventario/cab-inventario-create.service.js';
import UpdateCabInventarioService from '../services/cab_inventario/cab-inventario-update.service.js';
import DeleteCabInventarioService from '../services/cab_inventario/cab-inventario-delete.service.js';


class CabInventarioController {

  async create(request, response) {

    try {
      const { idprod, qtdeprod, status, observacao } = request.body;
      const create = container.resolve(CreateCabInventarioService);
      const data = await create.execute({ idprod, qtdeprod, status, observacao });

      if (data && process.data === false) {
        return response.status(BAD_REQUEST).json({ message: data.message });
      }

      return response.status(CREATED).json();
    } catch (error) {

      return response.status(400).json({
        message: error.message || 'Falha ao criar separação.',
      });
    }


  }

  async update(request, response) {
    const { id, qtdeprod, status, observacao } = request.body;

    const update = container.resolve(UpdateCabInventarioService);
    const data = await update.execute({ id, qtdeprod, status, observacao });
    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }

  async updateStatus(request, response) {
    try {
      const { id, codusu, status } = request.params;

      const update = container.resolve(UpdateCabInventarioService);
      const data = await update.atualizaStatus({ id, codusu, status });

      // verifica retorno do service
      if (data && data.sucesso === false) {
        console.log("Entrou no nao sucesso!")
        return response.status(400).json({ message: data.mensagem });
      }

      // sucesso
      return response.status(200).json({ message: data.mensagem ?? 'Status atualizado com sucesso!' });
    } catch (error) {
      console.error('[updateStatus] Erro:', error.message || error);
      return response.status(400).json({
        message: error.message || 'Falha ao atualizar status.',
      });
    }
  }

  async list(request, response) {
    const list = container.resolve(ListCabInventarioService);
    const data = await list.execute();
    return response.json(data);
  }

  async listActive(request, response) {
    const list = container.resolve(ListCabInventarioService);
    const data = await list.executeActive();
    return response.json(data);
  }

  async delete(request, response) {

    const id = request.params.id;
    const delet = container.resolve(DeleteCabInventarioService);
    const data = await delet.execute(id);
    if (data && data.success === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }
    return response.status(200).json();
  }
}

export default new CabInventarioController();

