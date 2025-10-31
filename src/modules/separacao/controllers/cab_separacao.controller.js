import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ListCabSeparacaoService from '../services/cab_separacao/cab-separacao-list.service.js';
import CreateCabSeparacaoService from '../services/cab_separacao/cab-separacao-create.service.js';
import UpdateCabSeparacaoService from '../services/cab_separacao/cab-separacao-update.service.js';
import DeleteCabSeparacaoService from '../services/cab_separacao/cab-separacao-delete.service.js';


class CabSeparacaoController {

  async create(request, response) {

    try {
      const { idprod, qtdeprod, status, observacao } = request.body;
      const create = container.resolve(CreateCabSeparacaoService);
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

    const update = container.resolve(UpdateCabSeparacaoService);
    const data = await update.execute({ id, qtdeprod, status, observacao });
    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }

  async updateStatus(request, response) {
    try {
      const { id, codusu, status } = request.params;

      const update = container.resolve(UpdateCabSeparacaoService);
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
    const list = container.resolve(ListCabSeparacaoService);
    const data = await list.execute();
    return response.json(data);
  }

  async listActive(request, response) {
    const list = container.resolve(ListCabSeparacaoService);
    const data = await list.executeActive();
    return response.json(data);
  }

  async delete(request, response) {

    const id = request.params.id;
    const delet = container.resolve(DeleteCabSeparacaoService);
    const data = await delet.execute(id);
    if (data && data.success === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }
    return response.status(200).json();
  }
}

export default new CabSeparacaoController();

