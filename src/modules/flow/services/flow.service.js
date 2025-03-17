import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Process from '../../../entities/process.entities.js';  // Sua entidade de usuário
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ListFlowService {
  constructor() {
    this.flowRepository = AppDataSource.getRepository(Process);
  }

  async execute() {
    const flow = await this.flowRepository.find({ where: { statusProcess: 'A' }, relations: ['steps', 'products', 'steps.status'] });

    /* console.log(flow) */


    const result = flow.map(process => {
      return {
        projeto: process.products.name,
        datapast: this.formatDate(process.datapast),
        dataenvase: this.formatDate(process.dataenvase),
        linhas: process.steps.map(step => ({
          id: step.id,
          label: step.label,
          status: step.status.status,
          color: step.status.color,
          colortext: step.status.colorText,
          blocked: step.status.blocked,
          description: step.description,
          createdAt: this.formatDate(step.createdAt),
          closedAt: this.formatDate(step.closedAt),
          idProcess: step.idProcess,
          orderby: step.orderby,
          startAt: this.formatDate(step.startAt)
        }))
      };
    });


    /*  if (!flow) {
       throw new AppError(AppErrorTypes.users.notFound, NOT_FOUND);
     } */
    return result;
  }

  formatDate(date) {
    if (!date) return null;
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }


}

export default ListFlowService;
