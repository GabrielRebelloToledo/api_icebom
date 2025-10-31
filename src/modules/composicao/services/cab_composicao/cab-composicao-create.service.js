import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import CabComposicao from '../../../../entities/cab_composicao.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class CreateCabComposicaoService {
  constructor() {
    this.Repository = AppDataSource.getRepository(CabComposicao);

  }

  async execute({ idprod, active }) {

    const create = this.Repository.create({ idprod, active });

    // Salvar no banco
    const data = await this.Repository.save(create);

    if (!data) {
      return { success: false, message: "Composição não criada!" }
    }

    return { success: true, message: "Composição criada!" }

  }
}

export default CreateCabComposicaoService;
