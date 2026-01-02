import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ItensInventario from '../../../../entities/itens_inventario.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class ListItensInventarioService {
  constructor() {

    this.Repository = AppDataSource.getRepository(ItensInventario);
  }

  async execute(id) {
    const prod = await this.Repository.find({
      relations: {
        cabInventario: true,
      }, where: { idCabInvent: id }
    });


    if (!prod) {
      throw new AppError(AppErrorTypes.prods.notFound, NOT_FOUND);
    }

    return prod;
  }


}

export default ListItensInventarioService;
