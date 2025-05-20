import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ShowReportService from '../service/show-report.service.js';
import ShowAllReportService from '../service/show-report-all.service.js'


class ReportController {


    async show(request, response) {

        /* console.log(request.params) */

        try {
            const showReports = container.resolve(ShowReportService);
            const bufferPDF = await showReports.execute(request.params.processId, request.params.stepId,request.params.nome);

            /* console.log(bufferPDF) */
            const bufferReal = Buffer.from(bufferPDF);

            response.setHeader('Content-Type', 'application/pdf');
            response.setHeader('Content-Disposition', 'attachment; filename=relatorio.pdf');
            response.send(bufferReal);
            /* 
            console.log('Tipo:', typeof bufferPDF);
            console.log('É Buffer?', Buffer.isBuffer(bufferReal));
            console.log('Tamanho:', bufferPDF.length); */


        } catch (error) {
            console.error(error);
            response.status(500).send('Erro ao gerar relatório');
        }


    }


    async showAll(request, response) {

        /* console.log(request.params) */

        try {
            const showReports = container.resolve(ShowAllReportService);
            const bufferPDF = await showReports.execute(request.params.processId,request.params.nome);

            /* console.log(bufferPDF) */
            const bufferReal = Buffer.from(bufferPDF);

            response.setHeader('Content-Type', 'application/pdf');
            response.setHeader('Content-Disposition', 'attachment; filename=relatorio.pdf');
            response.send(bufferReal);
            /* 
            console.log('Tipo:', typeof bufferPDF);
            console.log('É Buffer?', Buffer.isBuffer(bufferReal));
            console.log('Tamanho:', bufferPDF.length); */


        } catch (error) {
            console.error(error);
            response.status(500).send('Erro ao gerar relatório');
        }
    }


}

export default new ReportController();

