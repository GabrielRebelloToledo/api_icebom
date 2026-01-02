import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import CabInventario from '../../../../entities/cab_inventario.entities.js';


class DeleteCabInventarioService {
    constructor() {
        this.Repository = AppDataSource.getRepository(CabInventario);

    }
    async execute(id) {

        try {
             
            const product = await this.Repository.findOne({ where: { id: id } });
            
            const productDelete = await this.Repository.remove(product);

            if (productDelete.affected === 0) {
                return { success: false, message: "Registro não Encontrado!" }
            }
            return { success: true, message: "Registro Excluído!" }

        } catch (error) {
            return { success: false, message: "Não é possível excluir este registro." + error }
        }

    }
}

export default DeleteCabInventarioService;
