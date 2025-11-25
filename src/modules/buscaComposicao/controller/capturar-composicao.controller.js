import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


 
import buscarOpsLiberadasNaoImportadas from '../services/captura-composicao.js';
 


class CapturarComposicaoController {

  async create(request, response) {

    const create = container.resolve(buscarOpsLiberadasNaoImportadas);
    const data = await create.buscarOpsLiberadasNaoImportadas();

    if (data && process.data === false) {
      return response.status(BAD_REQUEST).json({ message: data.message });
    }

    return response.status(CREATED).json();
  }

}

export default new CapturarComposicaoController();

