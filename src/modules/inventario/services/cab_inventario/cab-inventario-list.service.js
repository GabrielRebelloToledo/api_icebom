import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import CabInventario from '../../../../entities/cab_inventario.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class ListCabInventarioService {
  constructor() {

    this.Repository = AppDataSource.getRepository(CabInventario);
  }
  

  async execute() {

    const prod = await this.Repository.find({ relations: { statusInventario: true, userInventario: true } });

    if (!prod) {
      throw new AppError(AppErrorTypes.prods.notFound, NOT_FOUND);
    }

    return prod;
  }

 

}

export default ListCabInventarioService;
