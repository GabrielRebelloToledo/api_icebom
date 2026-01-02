import AppDataSource from '../../../../shared/infra/environments/environments.js';
import ItensInventario from '../../../../entities/itens_inventario.entities.js';



class CreateItensInventarioService {
  constructor() {
    this.Repository = AppDataSource.getRepository(ItensInventario);

  }


  async execute({ id, idCabInvent, idprod, descricaoprod, quantidade, local, estoque, diferenca, tipoitem,  unidade }) {
    const create = this.Repository.create({ id, idCabInvent, idprod, descricaoprod, quantidade, local, estoque, diferenca, tipoitem,  unidade });
    // Salvar no banco
    const data = await this.Repository.save(create);

    if (!data) {
      return { success: false, message: "Itens invetário não criados!" }
    }

    return { success: true, message: "Itens invetário criados!" }

  }
}


 

export default CreateItensInventarioService;



