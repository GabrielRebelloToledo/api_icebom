import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ListProcessService {
    constructor() {}
    async execute(type) {

        const list = await AppDataSource.query('SELECT * FROM processoresumo');

        if (!list) {
            console.error("Não Encontrado", NOT_FOUND);
        }
        console.log(list)
        return list;
    }

    async executeSum(type) {

        const list = await AppDataSource.query('SELECT * FROM processoresumosoma');

        if (!list) {
            console.error("Não Encontrado", NOT_FOUND);
        }
        console.log(list)
        return list;
    }
  




}
export default ListProcessService;
