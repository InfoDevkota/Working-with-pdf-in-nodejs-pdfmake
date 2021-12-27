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

// pdfDoc = pdfmake.createPdfKitDocument(docDefination, {});
// pdfDoc.pipe(fs.createWriteStream('pdfs/test.pdf'));
// pdfDoc.end();



let content = [{
    text: "Hello World",
    alignment: 'center',
    fontSize: 25
}]

for (let i = 0; i < 50; i++) {
    content.push({
        text: `${i}) a random test.. `
    })
}

let headerfooterDoc = {
    header: {
        margin: [0, 20, 0, 0],
        alignment: 'center',

        image: 'images/info.png',
        height: 100

    },

    //
    // static footer
    // footer: {
    //     margin: [72, 0, 72, 0],
    //     fontSize: 10,
    //     columns: [{
    //             with: 'auto',
    //             alignment: 'left',
    //             text: '© Blogger Nepal 2022'
    //         }

    //     ],
    // },
    //
    // for dynamic footer

    footer: (currentPage, pageCount, pageSize) => {
        return {
            margin: [72, 0, 72, 0],
            fontSize: 10,
            columns: [{
                    with: 'auto',
                    alignment: 'left',
                    text: '© Blogger Nepal 2022'
                },
                {
                    with: 'auto',
                    alignment: 'right',
                    // text: 'Page | 1'
                    text: [{
                            color: '#7f7f7f',
                            text: 'Page | '
                        },
                        {
                            text: currentPage
                        }
                    ]
                }

            ],
        }
    },

    content: content,
    pageMargins: [72, 120, 72, 50],
}

pdfDoc = pdfmake.createPdfKitDocument(headerfooterDoc, {});
pdfDoc.pipe(fs.createWriteStream('pdfs/headerfooter.pdf'));
pdfDoc.end();