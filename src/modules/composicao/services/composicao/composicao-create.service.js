import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ComposicaoMp from '../../../../entities/composicao.entities.js';

import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class CreateComposicaoService {
  constructor() {
   this.Repository = AppDataSource.getRepository(ComposicaoMp);
  }

  async execute({ idCab, idprod, qtde, active }) {

    const create = this.Repository.create({ idCab, idprod, qtde, active });

    // Salvar no banco
    const data = await this.Repository.save(create);

    if (!data) {
      return { success: false, message: "Produto não incluído!" }
    }

    return { success: true, message: "Produto incluído!" }

  }
}

export default CreateComposicaoService;
