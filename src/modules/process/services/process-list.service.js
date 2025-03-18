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
    async execute(type) {


        const whereClause = type === '0' ? {} : { statusProcess: type };

        const list = await this.processRepository.find({
            relations: ['products'],
            where: whereClause
        });


        if (!list) {
            console.error("Não Encontrado", NOT_FOUND);
        }
        return list;
    }
    //console.log(list)




}
export default ListProcessService;
