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
  async execute(a) {

    //const form = await this.formRepository.find({ where: { title: a }, relations: ['fields'], order: { 'fields.order': 'ASC' } });

    const form = await this.formRepository
    .createQueryBuilder('stepForm')
    .leftJoinAndSelect('stepForm.fields', 'fields')
    .orderBy('fields.order', 'ASC')
    .where('stepForm.title = :title', { title: a })
    .getMany();

    if (!form) {
      throw new AppError(AppErrorTypes.users.notFound, NOT_FOUND);
    }
    return form;
  }
}
export default ListFormService;
