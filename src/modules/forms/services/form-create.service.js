import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import StepForm from '../../../entities/step-form.entities.js';

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class CreateFormService {
  constructor() {
    this.formRepository = AppDataSource.getRepository(StepForm);
  }

  async execute({ title }) {

    const formcreate = this.formRepository.create({ title });

    // Salvar no banco
    const stepform = await this.formRepository.save(formcreate);

    if (!stepform) {
      return { success: false, message: "Cabeçalho não criado!" }
    }

    return { success: true, message: "Cabeçalho criado!" }

  }
}

export default CreateFormService;
