import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import StepForm from '../../../entities/step-form.entities.js';  // Sua entidade de usuário
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ListFormService {
  constructor() {
    // Repositório do TypeORM para a entidade User
    this.formRepository = AppDataSource.getRepository(StepForm);
    
  }
  async execute() {
    const form = await this.formRepository.find({relations: ['fields'] });

    if (!form) {
      throw new AppError(AppErrorTypes.users.notFound, NOT_FOUND);
    }
    /* console.log(form) */
    return form;
  }


}
export default ListFormService;
