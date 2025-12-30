import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ItensSeparacao from '../../../../entities/itens_separacao.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class ListItensInventarioService {
  constructor() {

    this.Repository = AppDataSource.getRepository(ItensSeparacao);
  }

  async execute(id) {
    const prod = await this.Repository.find({
      relations: {
        cabSeparacao: true,
      }, where: { idCabSep: id }
    });



    if (!prod) {
      throw new AppError(AppErrorTypes.prods.notFound, NOT_FOUND);
    }

    return prod;
  }

  async executeActive() {
    const prod = await this.Repository.find({
      where: { active: "S" }
    });

    if (!prod) {
      throw new AppError(AppErrorTypes.prods.notFound, NOT_FOUND);
    }

    return prod;
  }


}

export default ListItensInventarioService;
