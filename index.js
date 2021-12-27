const fs = require('fs');

const Pdfmake = require('pdfmake');


var fonts = {
    Roboto: {
        normal: 'fonts/roboto/Roboto-Regular.ttf',
        bold: 'fonts/roboto/Roboto-Medium.ttf',
        italics: 'fonts/roboto/Roboto-Italic.ttf',
        bolditalics: 'fonts/roboto/Roboto-MediumItalic.ttf'
    }
};


let pdfmake = new Pdfmake(fonts);

let docDefination = {
    content: [
        'Hello World!'
    ],
}


let pdfDoc;

pdfDoc = pdfmake.createPdfKitDocument(docDefination, {});
pdfDoc.pipe(fs.createWriteStream('pdfs/test.pdf'));
pdfDoc.end();