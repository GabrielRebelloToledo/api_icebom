import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ProductsMP from '../../../entities/products_mp.entities.js'; // Sua entidade de usuário
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ListProductsService {
  constructor() {
    // Repositório do TypeORM para a entidade prod
    this.ProductsRepository = AppDataSource.getRepository(ProductsMP);
  }

  async execute() {
    const prod = await this.ProductsRepository.find();

    if (!prod) {
      throw new AppError(AppErrorTypes.prods.notFound, NOT_FOUND);
    }

    return prod;
  }

  async executeActive() {
    const prod = await this.ProductsRepository.find({
      where: { active: "S" }
    });

    if (!prod) {
      throw new AppError(AppErrorTypes.prods.notFound, NOT_FOUND);
    }

    return prod;
  }


}

export default ListProductsService;
