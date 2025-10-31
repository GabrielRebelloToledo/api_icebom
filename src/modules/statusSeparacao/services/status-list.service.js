import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import StatusSeparacao from '../../../entities/status-separacao.entites.js';
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ListStatusService {
    constructor() {
        // Repositório do TypeORM para a entidade User
        this.statusRepository = AppDataSource.getRepository(StatusSeparacao);

    }
    async execute() {
        const status = await this.statusRepository.find();

        if (!status) {
            throw new AppError(AppErrorTypes.users.notFound, NOT_FOUND);
        }
        /* console.log(form) */
        return status;
    }


}
export default ListStatusService;
