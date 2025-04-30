import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';

// Configura as fontes e o sistema de arquivos virtual (vfs)
pdfMake.vfs = pdfFonts.vfs;

pdfMake.fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
};

export const gerarPdfBuffer = async (docDefinition) => {
    try {
      const pdfDocGenerator = pdfMake.createPdf(docDefinition);
      const buffer = await new Promise((resolve, reject) => {
        pdfDocGenerator.getBuffer((buffer) => resolve(buffer), (error) => reject(error));
      });
      return buffer;
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      throw error;
    }
  };
  
