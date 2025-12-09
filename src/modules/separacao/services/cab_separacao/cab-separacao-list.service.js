import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import CabSeparacao from '../../../../entities/cab_separacao.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class ListCabSeparacaoService {
  constructor() {

    this.Repository = AppDataSource.getRepository(CabSeparacao);
  }
  

  async execute() {

    const prod = await this.Repository.find({ relations: { statusSeparacao: true, userSep: true, userConf: true } });

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

export default ListCabSeparacaoService;
