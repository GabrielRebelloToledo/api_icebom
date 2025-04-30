import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Type from '../../../entities/type.entities.js'; // Sua entidade de usuário
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ListTypeService {
    constructor() {
        // Repositório do TypeORM para a entidade User
        this.TypeRepository = AppDataSource.getRepository(Type);

    }
    async execute() {
        const type = await this.TypeRepository.find();

        if (!type) {
            throw new AppError(AppErrorTypes.users.notFound, NOT_FOUND);
        }
        /* console.log(form) */
        return type;
    }


}
export default ListTypeService;
