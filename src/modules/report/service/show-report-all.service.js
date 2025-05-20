import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ProcessActivity from '../../../entities/process-activity.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

import { relatorio8 } from '../reports/report8.js';


import { gerarPdfBuffer } from './gerarPdfBuffer.js';


import { getConsulta } from '../reports/consulta.js';


const templates = {
    'GERAL': relatorio8,
};


class ShowAllReportService {
    constructor() {
        this.ProcessShowActivityRepository = AppDataSource.getRepository(ProcessActivity);
    }

    async execute(processId, nome) {

        const query = getConsulta();
        const list = await AppDataSource.query(query, processId);
       
        // Escolhe dinamicamente qual template usar
        const montarRelatorio = templates[nome];
        const processShowCorrigido = this.fixDateFields(list);
        const docDefinition = montarRelatorio(processShowCorrigido);
        const pdfBuffer = await gerarPdfBuffer(docDefinition);
        return pdfBuffer;


    }

    formatToDateTimeLocal(isoDate) {


        const date = new Date(isoDate);

        // Verifica se a data é válida
        if (isNaN(date.getTime())) {
            return null; // Retorna nulo caso a data não seja válida
        }

        // Ajusta para o formato local (sem o 'Z' e no formato local)
        const pad = (n) => n.toString().padStart(2, '0');
        return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} - ${pad(date.getHours())}:${pad(date.getMinutes())}`;
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

export default ShowAllReportService;
