import 'dotenv/config';
export const relatorio8 = (processShow) => {
  const dados = processShow[0];

  return {
    content: [
      { text: 'Relatório de Recebimento de NF', style: 'header', margin: [0, 0, 0, 20] },

      {
        columns: [
          { width: 'auto', text: 'Processo:', bold: true },
          { width: '*', text: dados.idProcessRec }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Etapa:', bold: true },
          { width: '*', text: dados.idStepRec }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Número NFs:', bold: true },
          { width: '*', text: dados.nronfrec }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Data/Hora:', bold: true },
          { width: '*', text: dados.datarec }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Status:', bold: true },
          { width: '*', text: dados.statusrec }
        ],
        margin: [0, 0, 0, 20]
      },

      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },

      { text: 'Anexos', style: 'subheader', margin: [0, 0, 0, 10] },

      dados.file1rec && { text: 'Arquivo 1', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file1rec}`, linkTarget: '_blank', style: 'link' },
      dados.file2rec && { text: 'Arquivo 2', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file2rec}`, linkTarget: '_blank', style: 'link' },
      dados.file3rec && { text: 'Arquivo 3', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file3rec}`, linkTarget: '_blank', style: 'link' },
      dados.file4rec && { text: 'Arquivo 4', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file4rec}`, linkTarget: '_blank', style: 'link' },
      dados.file5rec && { text: 'Arquivo 5', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file5rec}`, linkTarget: '_blank', style: 'link' },
      dados.file6rec && { text: 'Arquivo 6', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file6rec}`, linkTarget: '_blank', style: 'link' },

      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },


      /* Relatório de Conferência NF x MP */

      { text: 'Relatório de Conferência NF x MP', style: 'header', margin: [0, 0, 0, 20] },

      {
        columns: [
          { width: 'auto', text: 'Processo:', bold: true },
          { width: '*', text: dados.idProcessConfNF }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Etapa:', bold: true },
          { width: '*', text: dados.idStepConfNF }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Data/Hora Conferência:', bold: true },
          { width: '*', text: dados.dataConfNF }
        ],
        margin: [0, 0, 0, 5]
      },

      {
        columns: [
          { width: 'auto', text: 'Itens conformes:', bold: true },
          { width: '*', text: dados.iteconformeConfNF }
        ],
        margin: [0, 0, 0, 5]
      },

      {
        columns: [
          { width: 'auto', text: 'Divergência na conferência:', bold: true },
          { width: '*', text: dados.diverconfConfNF }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Quantidade de Pallets:', bold: true },
          { width: '*', text: dados.qtdpalletsConfNF }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Observação:', bold: true },
          { width: '*', text: dados.obsconfConfNF }
        ],
        margin: [0, 0, 0, 5]
      },

      {
        columns: [
          { width: 'auto', text: 'Status:', bold: true },
          { width: '*', text: dados.statusConfNF }
        ],
        margin: [0, 0, 0, 5]
      },

      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },

      { text: 'Anexos', style: 'subheader', margin: [0, 0, 0, 10] },

      dados.file1ConfNF && { text: 'Arquivo 1', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file1ConfNF}`, linkTarget: '_blank', style: 'link' },
      dados.file2ConfNF && { text: 'Arquivo 2', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file2ConfNF}`, linkTarget: '_blank', style: 'link' },
      dados.file3ConfNF && { text: 'Arquivo 3', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file3ConfNF}`, linkTarget: '_blank', style: 'link' },
      dados.file4ConfNF && { text: 'Arquivo 4', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file4ConfNF}`, linkTarget: '_blank', style: 'link' },
      dados.file5ConfNF && { text: 'Arquivo 5', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file5ConfNF}`, linkTarget: '_blank', style: 'link' },
      dados.file6ConfNF && { text: 'Arquivo 6', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file6ConfNF}`, linkTarget: '_blank', style: 'link' },

      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },



      /* Relatório de Puxada de MP */

      { text: 'Relatório de Puxada de MP', style: 'header', margin: [0, 0, 0, 20] },

      {
        columns: [
          { width: 'auto', text: 'Processo:', bold: true },
          { width: '*', text: dados.idProcessPMP }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Etapa:', bold: true },
          { width: '*', text: dados.idStepPMP }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Data/Hora Recebimento:', bold: true },
          { width: '*', text: dados.dataPMP }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Quantidade de Pallets:', bold: true },
          { width: '*', text: dados.qtdpalletsPMP }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Status:', bold: true },
          { width: '*', text: dados.statusPMP }
        ],
        margin: [0, 0, 0, 20]
      },

      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },

      { text: 'Anexos', style: 'subheader', margin: [0, 0, 0, 10] },

      dados.file1PMP && { text: 'Arquivo 1', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file1PMP}`, linkTarget: '_blank', style: 'link' },
      dados.file2PMP && { text: 'Arquivo 2', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file2PMP}`, linkTarget: '_blank', style: 'link' },
      dados.file3PMP && { text: 'Arquivo 3', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file3PMP}`, linkTarget: '_blank', style: 'link' },
      dados.file4PMP && { text: 'Arquivo 4', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file4PMP}`, linkTarget: '_blank', style: 'link' },
      dados.file5PMP && { text: 'Arquivo 5', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file5PMP}`, linkTarget: '_blank', style: 'link' },
      dados.file6PMP && { text: 'Arquivo 6', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file6PMP}`, linkTarget: '_blank', style: 'link' },


      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },



      /* Relatório de Produção */


      { text: 'Relatório de Produção', style: 'header', margin: [0, 0, 0, 20] },

      {
        columns: [
          { width: 'auto', text: 'Processo:', bold: true },
          { width: '*', text: dados.idProcessProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Etapa:', bold: true },
          { width: '*', text: dados.idStepProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Recebimento:', bold: true },
          { width: '*', text: dados.checkrecProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Observação Recebimento:', bold: true },
          { width: '*', text: dados.obsrecProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Data/Hora Recebimento:', bold: true },
          { width: '*', text: dados.datarecProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Pasteurização:', bold: true },
          { width: '*', text: dados.checkpastProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Observação Pasteurização:', bold: true },
          { width: '*', text: dados.obspastProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Data/Hora Pasteurização:', bold: true },
          { width: '*', text: dados.datapastProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Maturação:', bold: true },
          { width: '*', text: dados.checkmatProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Observação Maturação:', bold: true },
          { width: '*', text: dados.obsmatProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Data/Hora Maturação:', bold: true },
          { width: '*', text: dados.datamatProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Envase:', bold: true },
          { width: '*', text: dados.checkenvProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Observação Envase:', bold: true },
          { width: '*', text: dados.obsenvProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Data/Hora Envase:', bold: true },
          { width: '*', text: dados.dataenvProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Apontamento:', bold: true },
          { width: '*', text: dados.checkapontProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Observação Apontamento:', bold: true },
          { width: '*', text: dados.obsapontProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Data/Hora Apontamento:', bold: true },
          { width: '*', text: dados.dataapontProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Liberação:', bold: true },
          { width: '*', text: dados.checklibProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Observação Liberação:', bold: true },
          { width: '*', text: dados.obslibProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Quantidade de Pallets:', bold: true },
          { width: '*', text: dados.qtdpalletsProd }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Status:', bold: true },
          { width: '*', text: dados.statusProd }
        ],
        margin: [0, 0, 0, 20]
      },

      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },

      { text: 'Anexos', style: 'subheader', margin: [0, 0, 0, 10] },

      dados.file1Prod && { text: 'Arquivo 1', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file1Prod}`, linkTarget: '_blank', style: 'link' },
      dados.file2Prod && { text: 'Arquivo 2', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file2Prod}`, linkTarget: '_blank', style: 'link' },
      dados.file3Prod && { text: 'Arquivo 3', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file3Prod}`, linkTarget: '_blank', style: 'link' },
      dados.file4Prod && { text: 'Arquivo 4', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file4Prod}`, linkTarget: '_blank', style: 'link' },
      dados.file5Prod && { text: 'Arquivo 5', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file5Prod}`, linkTarget: '_blank', style: 'link' },
      dados.file6Prod && { text: 'Arquivo 6', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file6Prod}`, linkTarget: '_blank', style: 'link' },


      { canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ], margin: [0, 10, 0, 10] },
      /* Relatório de Conferência fim de produção */


      { text: 'Relatório de Conferência fim de produção', style: 'header', margin: [0, 0, 0, 20] },
  
        {
          columns: [
            { width: 'auto', text: 'Processo:', bold: true },
            { width: '*', text: dados.idProcessConfp }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Etapa:', bold: true },
            { width: '*', text: dados.idStepConfp }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Informações:', bold: true },
            { width: '*', text: dados.infoprodConfp }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Status:', bold: true },
            { width: '*', text: dados.statusConfp }
          ],
          margin: [0, 0, 0, 20]
        },
  
        { canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ], margin: [0, 10, 0, 10] },
  
        { text: 'Anexos', style: 'subheader', margin: [0, 0, 0, 10] },
        dados.file1Confp && { text: 'Arquivo 1', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file1Confp}`, linkTarget: '_blank', style: 'link' },
        dados.file2Confp && { text: 'Arquivo 2', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file2Confp}`, linkTarget: '_blank', style: 'link' },
        dados.file3Confp && { text: 'Arquivo 3', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file3Confp}`, linkTarget: '_blank', style: 'link' },
        dados.file4Confp && { text: 'Arquivo 4', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file4Confp}`, linkTarget: '_blank', style: 'link' },
        dados.file5Confp && { text: 'Arquivo 5', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file5Confp}`, linkTarget: '_blank', style: 'link' },
        dados.file6Confp && { text: 'Arquivo 6', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file6Confp}`, linkTarget: '_blank', style: 'link' },

        { canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ], margin: [0, 10, 0, 10] },

        /* Relatório de Emissão de NFs */


         { text: 'Relatório de Emissão de NFs', style: 'header', margin: [0, 0, 0, 20] },
  
        {
          columns: [
            { width: 'auto', text: 'Processo:', bold: true },
            { width: '*', text: dados.idProcessENF }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Etapa:', bold: true },
            { width: '*', text: dados.idStepENF }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Informações Nfs:', bold: true },
            { width: '*', text: dados.infonfsENF }
          ],
          margin: [0, 0, 0, 5]
        },
        {
          columns: [
            { width: 'auto', text: 'Status:', bold: true },
            { width: '*', text: dados.statusENF }
          ],
          margin: [0, 0, 0, 20]
        },
  
        { canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ], margin: [0, 10, 0, 10] },
  
        { text: 'Anexos', style: 'subheader', margin: [0, 0, 0, 10] },
  
        dados.file1ENF && { text: 'Arquivo 1', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file1ENF}`, linkTarget: '_blank', style: 'link' },
        dados.file2ENF && { text: 'Arquivo 2', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file2ENF}`, linkTarget: '_blank', style: 'link' },
        dados.file3ENF && { text: 'Arquivo 3', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file3ENF}`, linkTarget: '_blank', style: 'link' },
        dados.file4ENF && { text: 'Arquivo 4', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file4ENF}`, linkTarget: '_blank', style: 'link' },
        dados.file5ENF && { text: 'Arquivo 5', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file5ENF}`, linkTarget: '_blank', style: 'link' },
        dados.file6ENF && { text: 'Arquivo 6', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file6ENF}`, linkTarget: '_blank', style: 'link' },
        

      { canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ], margin: [0, 10, 0, 10] },
        /* Relatório de Devolução de MP */

      { text: 'Relatório de Devolução de MP', style: 'header', margin: [0, 0, 0, 20] },

      {
        columns: [
          { width: 'auto', text: 'Processo:', bold: true },
          { width: '*', text: dados.idProcessENF }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Etapa:', bold: true },
          { width: '*', text: dados.idStepENF }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Informações Dev Nfs:', bold: true },
          { width: '*', text: dados.infonfsENF }
        ],
        margin: [0, 0, 0, 5]
      },
      {
        columns: [
          { width: 'auto', text: 'Status:', bold: true },
          { width: '*', text: dados.statusENF }
        ],
        margin: [0, 0, 0, 20]
      },

      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },

      { text: 'Anexos', style: 'subheader', margin: [0, 0, 0, 10] },

      dados.file1ENF && { text: 'Arquivo 1', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file1ENF}`, linkTarget: '_blank', style: 'link' },
      dados.file2ENF && { text: 'Arquivo 2', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file2ENF}`, linkTarget: '_blank', style: 'link' },
      dados.file3ENF && { text: 'Arquivo 3', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file3ENF}`, linkTarget: '_blank', style: 'link' },
      dados.file4ENF && { text: 'Arquivo 4', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file4ENF}`, linkTarget: '_blank', style: 'link' },
      dados.file5ENF && { text: 'Arquivo 5', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file5ENF}`, linkTarget: '_blank', style: 'link' },
      dados.file6ENF && { text: 'Arquivo 6', link: `http://${process.env.DB_HOST}:${process.env.PORT}/upload/show/intern/${dados.file6ENF}`, linkTarget: '_blank', style: 'link' },

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
