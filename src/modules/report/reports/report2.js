import 'dotenv/config';
export const relatorio2 = (processShow) => {
  const dados = processShow[0];

  return {
    content: [
      { text: 'Relatório de Conferência NF x MP', style: 'header', margin: [0, 0, 0, 20] },

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
          { width: 'auto', text: 'Data/Hora Conferência:', bold: true },
          { width: '*', text: dados.data }
        ],
        margin: [0, 0, 0, 5]
      },

      {
        columns: [
          { width: 'auto', text: 'Itens conformes:', bold: true },
          { width: '*', text: dados.iteconforme }
        ],
        margin: [0, 0, 0, 5]
      },

      {
        columns: [
          { width: 'auto', text: 'Divergência na conferência:', bold: true },
          { width: '*', text: dados.diverconf }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Quantidade de Pallets:', bold: true },
          { width: '*', text: dados.qtdpallets }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Observação:', bold: true },
          { width: '*', text: dados.obsconf }
        ],
        margin: [0, 0, 0, 5]
      },

      {
        columns: [
          { width: 'auto', text: 'Status:', bold: true },
          { width: '*', text: dados.status }
        ],
        margin: [0, 0, 0, 5]
      },
  
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },

      { text: 'Anexos', style: 'subheader', margin: [0, 0, 0, 10] },

      dados.file1 && { text: 'Arquivo 1', link: `http://localhost:${process.env.PORT}/upload/show/intern/${dados.file1}`, linkTarget: '_blank', style: 'link' },
      dados.file2 && { text: 'Arquivo 2', link: `http://localhost:${process.env.PORT}/upload/show/intern/${dados.file2}`, linkTarget: '_blank', style: 'link' },
      dados.file3 && { text: 'Arquivo 3', link: `http://localhost:${process.env.PORT}/upload/show/intern/${dados.file3}`, linkTarget: '_blank', style: 'link' },
      dados.file4 && { text: 'Arquivo 4', link: `http://localhost:${process.env.PORT}/upload/show/intern/${dados.file4}`, linkTarget: '_blank', style: 'link' },

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
