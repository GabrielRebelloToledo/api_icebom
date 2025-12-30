import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import CabSeparacao from '../../../../entities/cab_separacao.entities.js';
import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class UpdateCabInventarioService {
    constructor() {
        this.Repository = AppDataSource.getRepository(CabSeparacao);

    }

    async execute({ id, idprod, qtdeprod, status, observacao }) {
        // Salvar no banco
        const products = await this.Repository.save({ id, idprod, qtdeprod, status, observacao });

        if (!products) {
            return { success: false, message: "Produto não atualizado!" }
        }
        return { success: true, message: "Produto Atualizado!" }
    }




    async atualizaStatus({ id, codusu, status }) {
        const cabComposicao = await this.Repository.findOne({ where: { id } });

        if (!cabComposicao) {
            return { sucesso: false, mensagem: 'Registro não encontrado.' };
        }

        if (Number(cabComposicao.status) === 4) {
            return { sucesso: false, mensagem: 'Separação se encontra Finalizada. Não é possivél alterar seu Status.' };
        }

        if (Number(cabComposicao.status) === 5) {
            return { sucesso: false, mensagem: 'Separação se encontra cancelada. Não é possivél alterar seu Status.' };
        }

        if (Number(status) === 6) {
            cabComposicao.status = status;
            cabComposicao.codususep = codusu;
            await this.Repository.save(cabComposicao);
            return { sucesso: true, mensagem: 'Separação Iniciada com Sucesso.' };
        }

        if (Number(status) === 7) {
            cabComposicao.status = status;
            await this.Repository.save(cabComposicao);
            return { sucesso: true, mensagem: 'Separação Finalizada com Sucesso.' };
        }

        if (Number(status) === 8) {
            cabComposicao.status = status;
            cabComposicao.codusuconf = codusu;
            await this.Repository.save(cabComposicao);
            return { sucesso: true, mensagem: 'Conferencia Iniciada com Sucesso.' };
        }

        if (Number(status) === 9) {
            cabComposicao.status = status;
            await this.Repository.save(cabComposicao);
            return { sucesso: true, mensagem: 'Conferencia Iniciada com Sucesso.' };
        }

        cabComposicao.status = status;

        await this.Repository.save(cabComposicao);

        return { sucesso: true, mensagem: 'Status atualizado com sucesso.' };
    }
}

export default UpdateCabInventarioService;
