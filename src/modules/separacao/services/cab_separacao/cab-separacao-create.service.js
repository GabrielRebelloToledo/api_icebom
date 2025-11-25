import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import AppError from '../../../../shared/errors/app-error.js'; // Classe personalizada de erro
import CabSeparacao from '../../../../entities/cab_separacao.entities.js';
import ItensSeparacao from '../../../../entities/itens_separacao.entities.js';
import CabComposicao from '../../../../entities/cab_composicao.entities.js';
import ComposicaoMp from '../../../../entities/composicao.entities.js';

import AppErrorTypes from '../../../../shared/errors/app-error-types.js';
import { NOT_FOUND } from '../../../../shared/infra/constants/http-status-code.constants.js';

class CreateCabSeparacaoService {
  constructor() {
    this.Repository = AppDataSource.getRepository(CabSeparacao);
    this.RepositoryItens = AppDataSource.getRepository(ItensSeparacao);

    /* Composição */
    this.RepositoryCabComposicao = AppDataSource.getRepository(CabComposicao);
    this.RepositoryItensComposicao = AppDataSource.getRepository(ComposicaoMp);
  }



  async executeMaxibom({ id, idOp, idprod, qtdeprod, status, observacao, name }) {
    try {
      // (opcional) validações rápidas
      if (!idprod || !qtdeprod) {
        return { sucesso: false, mensagem: 'idprod e qtdeprod são obrigatórios.' };
      }

      // cria e salva o cabeçalho
      const entidade = this.Repository.create({ id, idOp, idprod, qtdeprod, status, observacao, name });
      const data = await this.Repository.save(entidade);

      if (!data || !data.id) {
        return { sucesso: false, mensagem: 'Id do processo não encontrado após salvar.' };
      }


      return {
        sucesso: true,
        mensagem: 'Separação criados.',
        dados: { cabecalho: data, itens: '' },

      };
    } catch (err) {
      console.error('[execute] Erro:', err?.message || err);
      // não derruba o servidor; controller devolve 400 com esta mensagem
      return { sucesso: false, mensagem: err?.message || 'Falha ao criar separação.' };
    }
  }


  async execute({ idprod, qtdeprod, status, observacao }) {
    try {
      // (opcional) validações rápidas
      if (!idprod || !qtdeprod) {
        return { sucesso: false, mensagem: 'idprod e qtdeprod são obrigatórios.' };
      }

      // cria e salva o cabeçalho
      const entidade = this.Repository.create({ idprod, qtdeprod, status, observacao });
      const data = await this.Repository.save(entidade);

      if (!data || !data.id) {
        return { sucesso: false, mensagem: 'Id do processo não encontrado após salvar.' };
      }

      // cria itens (AGORA com await)
      const criarSeparacaoItens = await this.criarItensSeparacao(data.id, idprod, qtdeprod);

      // cobre os dois jeitos: service que retorna objeto de status OU que retorna array/salvos
      if (criarSeparacaoItens && typeof criarSeparacaoItens === 'object' && 'sucesso' in criarSeparacaoItens) {
        if (criarSeparacaoItens.sucesso === false) {
          return { sucesso: false, mensagem: criarSeparacaoItens.mensagem || 'Itens não criados.' };
        }
        return {
          sucesso: true,
          mensagem: 'Separação e itens criados.',
          dados: { cabecalho: data, itens: criarSeparacaoItens.dados ?? criarSeparacaoItens },
        };
      }

      // se retornou array (ex.: this.RepositoryItens.save(...))
      if (!criarSeparacaoItens || (Array.isArray(criarSeparacaoItens) && criarSeparacaoItens.length === 0)) {
        return { sucesso: false, mensagem: 'Itens não criados.' };
      }

      return {
        sucesso: true,
        mensagem: 'Separação e itens criados.',
        dados: { cabecalho: data, itens: criarSeparacaoItens },
      };
    } catch (err) {
      console.error('[execute] Erro:', err?.message || err);
      // não derruba o servidor; controller devolve 400 com esta mensagem
      return { sucesso: false, mensagem: err?.message || 'Falha ao criar separação.' };
    }
  }



  async criarItensSeparacao(id, idProduto, qtdeProd) {
    try {
      // 1) Busca o cabeçalho de composição
      const cabComposicao = await this.RepositoryCabComposicao.findOne({
        where: { idprod: idProduto },
      });

      if (!cabComposicao || !cabComposicao.id) {
        // Se não há composição, desfaz o cabeçalho (se existir) e erra
        const cab = await this.Repository.findOne({ where: { id } });
        if (cab) await this.Repository.remove(cab);

        throw new Error(`Composição não encontrada para o produto ${idProduto}.`);
      }

      const idCab = cabComposicao.id;

      // 2) Busca itens da composição
      const itensComposicao = await this.RepositoryItensComposicao.find({
        where: { idCab: idCab },
      });

      if (!Array.isArray(itensComposicao) || itensComposicao.length === 0) {
        const cab = await this.Repository.findOne({ where: { id } });
        if (cab) await this.Repository.remove(cab);

        throw new Error(`Composição sem itens para o produto ${idProduto} (idCab=${idCab}).`);
      }

      // 3) Monta os registros para salvar
      const registros = itensComposicao.map((it) => ({
        idCabSep: id,
        idprod: it.idprod,
        qtdeaseparar: Number(it.qtde) * Number(qtdeProd),
      }));

      // 4) Salva e retorna
      const retorno = await this.RepositoryItens.save(registros);
      return retorno;
    } catch (err) {
      console.error('[criarItensSeparacao] Erro:', err && err.message ? err.message : err);
      // Propaga o erro para a camada superior tratar (ex.: controller/HTTP)
      throw err instanceof Error ? err : new Error('Falha ao criar itens de separação.');
    }
  }

}

export default CreateCabSeparacaoService;


