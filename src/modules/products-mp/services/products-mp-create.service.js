import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ProductsMP from '../../../entities/products_mp.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class CreateProductService {
  constructor() {
    this.ProductsRepository = AppDataSource.getRepository(ProductsMP);

  }

  async execute({ name, volume, active, codbarras }) {

    const productscreate = this.ProductsRepository.create({ name,volume, active, codbarras });

    // Salvar no banco
    const products = await this.ProductsRepository.save(productscreate);

    if (!products) {
      return { success: false, message: "Produto não criado!" }
    }

    return { success: true, message: "Produto criado!" }

  }
}

export default CreateProductService;
