import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Process from '../../../entities/process.entities.js';  // Sua entidade de usuário
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ListProcessService {
    constructor() {
        // Repositório do TypeORM para a entidade User
        this.processRepository = AppDataSource.getRepository(Process);

    }
    async execute() {
        const list = await this.processRepository.find({relations:['products']});

        if (!list) {
            throw new AppError(AppErrorTypes.users.notFound, NOT_FOUND);
        }
        //console.log(list)
        return list;
    }


}
export default ListProcessService;
