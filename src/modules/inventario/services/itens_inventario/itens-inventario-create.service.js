import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ItensSeparacao from '../../../../entities/itens_separacao.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class CreateItensInventarioService {
  constructor() {
    this.Repository = AppDataSource.getRepository(ItensSeparacao);

  }


  async execute({ idCabSep, idprod, name, qtdeaseparar, qtdeseparada, qtdeconferida, codvol }) {
    const create = this.Repository.create({ idCabSep, idprod, name, qtdeaseparar, qtdeseparada, qtdeconferida, codvol });
    // Salvar no banco
    const data = await this.Repository.save(create);

    if (!data) {
      return { success: false, message: "Itens separados não criados!" }
    }

    return { success: true, message: "Itens separados criados!" }

  }
}

export default CreateItensInventarioService;



