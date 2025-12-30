import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


 
import CapturaComposicaoService from '../services/busca-inventario.service.js';
 


class CapturarInventarioController {

  async create(request, response) {

    const create = container.resolve(CapturaComposicaoService);
    const data = await create.buscarInventariosLiberadosNaoImportados();

    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }

}

export default new CapturarInventarioController();

