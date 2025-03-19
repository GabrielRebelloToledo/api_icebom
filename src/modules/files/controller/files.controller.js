import { container } from 'tsyringe';
import { BAD_REQUEST, NO_CONTENT } from '../../../shared/infra/constants/http-status-code.constants.js';
import path from 'path';
import fs from 'fs';

class FilesController {
    /*    async create(request, response) {
    
            console.log(request.file);
            const filePath = request.file.path;
            console.log("filePath");
            console.log(filePath);
    
            console.log(request.file);
    
            response.json({ message: 'Upload realizado com sucesso', path: request.file });
        }  */

    async create(request, response) {
        try {
            if (!request.file) {
                return response.status(400).json({ message: 'Nenhum arquivo enviado' });
            }

            console.log("Arquivo recebido:", request.file);

            const filePath = request.file.path;
            response.status(201).json({ message: 'Upload realizado com sucesso', path: request.file });
        } catch (error) {
            console.error("Erro no upload:", error);
            response.status(500).json({ message: 'Erro ao realizar upload', error: error.message });
        }
    }


    async delete(request, response) {

        //console.log(request.params.filename)

        const filename = request.params.filename;
        const filePath = path.join('src/modules/files', 'uploads', filename);

        if (fs.existsSync(filePath)) {
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Erro ao excluir arquivo', err);

                    response.status(500).json({ error: 'Erro ao excluir arquivo' });
                } else {


                    console.log('Arquivo excluído com sucesso');
                    response.status(200).json({ message: 'Arquivo excluído com sucesso' });
                }
            });
        } else {
            console.error('Arquivo não encontrado');
            response.status(404).json({ error: 'Arquivo não encontrado' });
        }
    }

    async show(request, response) {

        const { fileName } = request.params;

        const filePath = path.resolve('src/modules/files', 'uploads', fileName);

        if (fs.existsSync(filePath)) {
            const fileName = path.basename(filePath);
            return response.download(filePath, fileName, (err) => {
                if (err) {
                    console.error('Erro no download:', err);
                    response.status(500).json({ error: 'Erro ao baixar o arquivo' });
                }
            });
        } else {
            return response.status(404).json({ error: 'Arquivo não encontrado' });
        }

    }

}

export default new FilesController();

