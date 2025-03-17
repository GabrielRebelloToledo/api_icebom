const fs = require('fs');
const path = require('path');
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Caminho do arquivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'src/entities/process-activity.entities.js');

class EntityFileManager {
  // Adiciona um novo campo ao arquivo de entidade
  static addFieldToEntity(newFieldName, newFieldType) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;

      // Adiciona o novo campo no bloco "columns"
      const newField = `        ${newFieldName}: {\n            type: '${newFieldType}',\n        },\n`;

      // Encontrar o índice onde a string "columns" começa
      const columnsStartIndex = data.indexOf('columns: {');

      // Insere o novo campo após o início da definição de columns
      const updatedData = data.slice(0, columnsStartIndex + 10) + newField + data.slice(columnsStartIndex + 10);

      // Escreve o arquivo com a nova estrutura
      fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) throw err;
        console.log('Campo adicionado com sucesso!');
      });
    });
  }

  // Remove um campo do arquivo de entidade
  static removeFieldFromEntity(fieldName) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;

      // Cria uma expressão regular para encontrar e remover o campo
      const regex = new RegExp(`\\s*${fieldName}: \\{[^}]*\\},`, 'g');
      const updatedData = data.replace(regex, '');

      // Escreve o arquivo sem o campo
      fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) throw err;
        console.log('Campo removido com sucesso!');
      });
    });
  }
}

export default EntityFileManager; 