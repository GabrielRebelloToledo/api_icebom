import AppDataSource from '../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../shared/errors/app-error.js'; // Classe personalizada de erro
import Process from '../../../entities/process.entities.js';  // Sua entidade de usuário
import Steps from '../../../entities/steps.entities.js';
import StepsProcess from '../../../entities/steps-process.entities.js';
import AppErrorTypes from '../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../shared/infra/constants/http-status-code.constants.js';

class UpdateService {
    constructor() {
        this.ProcessRepository = AppDataSource.getRepository(Process);
    }

    async execute(id) {

        const item = await this.ProcessRepository.findOneBy({ id: id });
        if (!item) throw new Error("Item não encontrado");

        // busca o item com ordem imediatamente inferior (ou seja, mais baixo na hierarquia)
        const itemAbaixo = await this.ProcessRepository.findOne({
            where: { order: item.order - 1 }
        });

        if (!itemAbaixo) {
            throw new Error("Esse item já está na base da hierarquia");
        }
        // troca as ordens
       const ordemAtual = item.order;
        item.order = itemAbaixo.order ?? item.order;
        itemAbaixo.order = ordemAtual;

       /*console.log("Item")
        console.log(item)
        console.log("itemAbaixo")
        console.log(itemAbaixo) */

        // salva as alterações
        await this.ProcessRepository.save([item, itemAbaixo]);

    }

}

export default UpdateService;
