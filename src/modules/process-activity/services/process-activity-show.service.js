import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ProcessActivity from '../../../entities/process-activity.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class ShowProcessActivityService {
    constructor() {
        this.ProcessShowActivityRepository = AppDataSource.getRepository(ProcessActivity);
    }

    async execute(processId, stepId) {

        const processShow = await this.ProcessShowActivityRepository.find({
            where: { idProcess: processId, idStep: stepId }
        });

        // Ajusta as datas antes de retornar a resposta...
        const processShowCorrigido = this.fixDateFields(processShow);
      
        return processShowCorrigido;
    }


    formatToDateTimeLocal(isoDate) {

        
        const date = new Date(isoDate);

        // Verifica se a data é válida
        if (isNaN(date.getTime())) {
            return null; // Retorna nulo caso a data não seja válida
        }

        // Ajusta para o formato local (sem o 'Z' e no formato local)
        const pad = (n) => n.toString().padStart(2, '0');
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
    }

    fixDateFields(obj) {
        if (Array.isArray(obj)) {
            return obj.map((item) => this.fixDateFields(item)); 
        }

        if (typeof obj === 'object' && obj !== null) {
            const newObj = {};
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = obj[key];

                    // Detecta string ISO 8601 (caso seja uma data válida)
                    if (value instanceof Date && !isNaN(value)) {
                        newObj[key] = this.formatToDateTimeLocal(value);
                       
                    
                    } else if (typeof value === 'object' && value !== null) {
                        newObj[key] = this.fixDateFields(value); // Recursão para objetos aninhados
                        
                        } else {
                        newObj[key] = value;
                        
                    }
                }
            }
            return newObj;
        }

        return obj;
    }


}

export default ShowProcessActivityService;
