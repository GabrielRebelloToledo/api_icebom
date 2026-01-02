import AppDataSource from '../../../../shared/infra/environments/environments.js';  // Importa a conexão do banco
import CabInventario from '../../../../entities/cab_inventario.entities.js';
import ItensInventario from '../../../../entities/itens_inventario.entities.js';

class CreateCabInventarioService {
  constructor() {
    this.Repository = AppDataSource.getRepository(CabInventario);
    this.RepositoryItens = AppDataSource.getRepository(ItensInventario);

  }


  async executeMaxibom({ id, status, data }) {
    try {
      // (opcional) validações rápidas
      if (!idprod || !qtdeprod) {
        return { sucesso: false, mensagem: 'idprod e qtdeprod são obrigatórios.' };
      }

      // cria e salva o cabeçalho
      const entidade = this.Repository.create({ id, status, data });
      const data = await this.Repository.save(entidade);

      if (!data || !data.id) {
        return { sucesso: false, mensagem: 'Id do processo não encontrado após salvar.' };
      }


      return {
        sucesso: true,
        mensagem: 'Inventário criado.',
        dados: { cabecalho: data, itens: '' },

      };

    } catch (err) {
      console.error('[execute] Erro:', err?.message || err);
      // não derruba o servidor; controller devolve 400 com esta mensagem
      return { sucesso: false, mensagem: err?.message || 'Falha ao criar inventário.' };
    }
  }

}

export default CreateCabInventarioService;


