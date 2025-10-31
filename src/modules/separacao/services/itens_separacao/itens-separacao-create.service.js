import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ItensSeparacao from '../../../../entities/itens_separacao.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class CreateItensSeparacaoService {
  constructor() {
    this.Repository = AppDataSource.getRepository(ItensSeparacao);

  }


  async execute({ idCabSep, idprod, qtdeaseparar, qtdeseparada, qtdeconferida }) {
    const create = this.Repository.create({ idCabSep, idprod, qtdeaseparar, qtdeseparada, qtdeconferida });
    // Salvar no banco
    const data = await this.Repository.save(create);

    if (!data) {
      return { success: false, message: "Composição não criada!" }
    }

    return { success: true, message: "Composição criada!" }

  }
}

export default CreateItensSeparacaoService;



 