import 'dotenv/config';
  export const relatorio4 = (processShow) => {
    const dados = processShow[0];
  
    return {
      content: [
        { text: 'Relatório de Produção', style: 'header', margin: [0, 0, 0, 20] },
  
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
            { width: 'auto', text: 'Recebimento:', bold: true },
            { width: '*', text: dados.checkrec }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Observação Recebimento:', bold: true },
            { width: '*', text: dados.obsrec }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Data/Hora Recebimento:', bold: true },
            { width: '*', text: dados.datarec }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Pasteurização:', bold: true },
            { width: '*', text: dados.checkpast }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Observação Pasteurização:', bold: true },
            { width: '*', text: dados.obspast }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Data/Hora Pasteurização:', bold: true },
            { width: '*', text: dados.datapast }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Maturação:', bold: true },
            { width: '*', text: dados.checkmat }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Observação Maturação:', bold: true },
            { width: '*', text: dados.obsmat }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Data/Hora Maturação:', bold: true },
            { width: '*', text: dados.datamat }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Envase:', bold: true },
            { width: '*', text: dados.checkenv }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Observação Envase:', bold: true },
            { width: '*', text: dados.obsenv }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Data/Hora Envase:', bold: true },
            { width: '*', text: dados.dataenv }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Apontamento:', bold: true },
            { width: '*', text: dados.checkapont }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Observação Apontamento:', bold: true },
            { width: '*', text: dados.obsapont }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Data/Hora Apontamento:', bold: true },
            { width: '*', text: dados.dataapont }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Liberação:', bold: true },
            { width: '*', text: dados.checklib }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Observação Liberação:', bold: true },
            { width: '*', text: dados.obslib }
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
            { width: 'auto', text: 'Status:', bold: true },
            { width: '*', text: dados.status }
          ],
          margin: [0, 0, 0, 20]
        },
  
        { canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ], margin: [0, 10, 0, 10] },
  
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
  