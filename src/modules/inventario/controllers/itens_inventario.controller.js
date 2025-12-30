import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ListItensInventarioService from '../services/itens_inventario/itens-inventario-list.service.js';
import CreateItensInventarioService from '../services/itens_inventario/itens-inventario-create.service.js';
import UpdateItensInventarioService from '../services/itens_inventario/itens-inventario-update.service.js';
import DeleteItensInventarioService from '../services/itens_inventario/itens-inventario-delete.service.js';


class ItensInventarioController {

  async create(request, response) {

    const { idCabSep, idprod, qtdeaseparar, qtdeseparada, qtdeconferida } = request.body;
    const create = container.resolve(CreateItensInventarioService);
    const data = await create.execute({ idCabSep, idprod, qtdeaseparar, qtdeseparada, qtdeconferida });

    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }

  async update(request, response) {

    const { id, qtdeprod, status, observacao } = request.body;
    const update = container.resolve(UpdateItensInventarioService);
    const data = await update.execute({ id, qtdeprod, status, observacao });

    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }


  async updateQuantidade(request, response) {
    try {
      const { id, codbarras, qtd, status } = request.params;

      const update = container.resolve(UpdateItensInventarioService);
      const data = await update.atualizaQuantidade({ id, codbarras, qtd, status });

      // verifica retorno do service
      if (data && data.sucesso === false) {
        console.log("Entrou no nao sucesso!")
        return response.status(400).json({ message: data.mensagem });
      }

      // sucesso
      return response.status(200).json({ message: data.mensagem ?? 'Quantidade atualizada com sucesso!' });
    } catch (error) {
      console.error('[updateStatus] Erro:', error.message || error);
      return response.status(400).json({
        message: error.message || 'Falha ao atualizar Quantidade.',
      });
    }
  }

  async updateQuantidadeManual(request, response) {
    try {
      const { id, idcab, qtd, status } = request.params;

      const update = container.resolve(UpdateItensInventarioService);
      const data = await update.atualizaQuantidadeManual({ id, idcab, qtd, status });

      // verifica retorno do service
      if (data && data.sucesso === false) {
        console.log("Entrou no nao sucesso!")
        return response.status(400).json({ message: data.mensagem });
      }

      // sucesso
      return response.status(200).json({ message: data.mensagem ?? 'Quantidade atualizada com sucesso!' });
    } catch (error) {
      console.error('[updateStatus] Erro:', error.message || error);
      return response.status(400).json({
        message: error.message || 'Falha ao atualizar Quantidade.',
      });
    }
  }

  async updateQuantidadeLimpar(request, response) {
    try {
      const { id, idcab, status } = request.params;

      const update = container.resolve(UpdateItensInventarioService);
      const data = await update.atualizaQuantidadeLimpar({ id, idcab, status });

      // verifica retorno do service
      if (data && data.sucesso === false) {
        console.log("Entrou no nao sucesso!")
        return response.status(400).json({ message: data.mensagem });
      }

      // sucesso
      return response.status(200).json({ message: data.mensagem ?? 'Quantidade atualizada com sucesso!' });
    } catch (error) {
      console.error('[updateStatus] Erro:', error.message || error);
      return response.status(400).json({
        message: error.message || 'Falha ao atualizar Quantidade.',
      });
    }
  }


  


  async list(request, response) {

    const { id } = request.params;

    const list = container.resolve(ListItensInventarioService);
    const data = await list.execute(id);
    return response.json(data);
  }

  async listActive(request, response) {
    const list = container.resolve(ListItensInventarioService);
    const data = await list.executeActive();
    return response.json(data);
  }

  async delete(request, response) {

    const id = request.params.id;
    const delet = container.resolve(DeleteItensInventarioService);

    const data = await delet.execute(id);

    if (data && data.success === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }
    return response.status(200).json();
  }
}

export default new ItensInventarioController();

