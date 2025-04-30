import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import ProcessActivity from '../../../entities/process-activity.entities.js';  // Sua entidade de usuário

import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';
import { relatorio1 } from '../reports/report1.js';
import { relatorio2 } from '../reports/report2.js';
import { relatorio3 } from '../reports/report3.js';
import { relatorio4 } from '../reports/report4.js';
import { relatorio5 } from '../reports/report5.js';
import { relatorio6 } from '../reports/report6.js';
import { relatorio7 } from '../reports/report7.js';


import { gerarPdfBuffer } from './gerarPdfBuffer.js';


const templates = {
    'RecebimentodeNF': relatorio1,
    'ConferenciaNFxMP': relatorio2,
    'PuxadadeMP': relatorio3,
    'Producao': relatorio4,
    'Conferenciafimdeproducao': relatorio5,
    'EmissaodeNFs': relatorio6,
    'DevolucaodeMP': relatorio7,

};


class ShowReportService {
    constructor() {
        this.ProcessShowActivityRepository = AppDataSource.getRepository(ProcessActivity);
    }

    async execute(processId, stepId, nome) {

        const processShow = await this.ProcessShowActivityRepository.find({
            where: { idProcess: processId, idStep: stepId }
        });

        // Escolhe dinamicamente qual template usar
        const montarRelatorio = templates[nome];
        const processShowCorrigido = this.fixDateFields(processShow);
        const docDefinition = montarRelatorio(processShowCorrigido);
        const pdfBuffer = await gerarPdfBuffer(docDefinition);
        return pdfBuffer;


    }

    // Ajusta as datas antes de retornar a resposta...
    /* const processShowCorrigido = this.fixDateFields(processShow); */
    /*  console.log(processShow)
     console.log(processShowCorrigido)
     return processShowCorrigido; */
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

export default ShowReportService;
