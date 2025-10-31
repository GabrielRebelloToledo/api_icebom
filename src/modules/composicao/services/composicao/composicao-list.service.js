import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ComposicaoMp from '../../../../entities/composicao.entities.js';

import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class ListComposicaoService {
  constructor() {
    // Repositório do TypeORM para a entidade prod
    this.Repository = AppDataSource.getRepository(ComposicaoMp);
  }

  async execute(id) {
    const prod = await this.Repository.find({
      relations: {
        productsMP: true, cabComposicao: {
          products: true,               // relação dentro do cabComposicao
        },
      }, where: { idCab: id },
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

export default ListComposicaoService;
