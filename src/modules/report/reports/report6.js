import 'dotenv/config';
  export const relatorio6 = (processShow) => {
    const dados = processShow[0];
  
    return {
      content: [
        { text: 'Relatório de Emissão de NFs', style: 'header', margin: [0, 0, 0, 20] },
  
        {
          columns: [
            { width: 'auto', text: 'Processo:', bold: true },
            { width: '*', text: dados.idProcess }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Etapa:', bold: true },
            { width: '*', text: dados.idStep }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Informações Nfs:', bold: true },
            { width: '*', text: dados.infonfs }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Status:', bold: true },
            { width: '*', text: dados.status }
          ],
          margin: [0, 0, 0, 20]
        },
  
        { canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ], margin: [0, 10, 0, 10] },
  
        { text: 'Anexos', style: 'subheader', margin: [0, 0, 0, 10] },
  
        dados.file1 && { text: 'Arquivo 1', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file1}`, linkTarget: '_blank', style: 'link' },
        dados.file2 && { text: 'Arquivo 2', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file2}`, linkTarget: '_blank', style: 'link' },
        dados.file3 && { text: 'Arquivo 3', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file3}`, linkTarget: '_blank', style: 'link' },
        dados.file4 && { text: 'Arquivo 4', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file4}`, linkTarget: '_blank', style: 'link' },
        dados.file5 && { text: 'Arquivo 5', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file5}`, linkTarget: '_blank', style: 'link' },
        dados.file6 && { text: 'Arquivo 6', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file6}`, linkTarget: '_blank', style: 'link' },
      
      ].filter(Boolean),
  
      styles: {
        header: { fontSize: 18, bold: true, alignment: 'center', font: 'Roboto' },
        subheader: { fontSize: 14, bold: true, font: 'Roboto' },
        link: { fontSize: 12, color: 'blue', decoration: 'underline', font: 'Roboto', margin: [0, 0, 0, 5] },
      },
  
      defaultStyle: {
        font: 'Roboto'
      }
    };
  };
  