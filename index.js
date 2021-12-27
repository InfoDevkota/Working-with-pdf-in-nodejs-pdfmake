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

// pdfDoc = pdfmake.createPdfKitDocument(headerfooterDoc, {});
// pdfDoc.pipe(fs.createWriteStream('pdfs/headerfooter.pdf'));
// pdfDoc.end();





let stylingDocs = {
    content: [{
        text: "Report",
        style: 'header'
    }, {
        text: 'This is an anual report. bla bla, some text goes here about this and that',
        style: 'text'
    }, {
        text: "About Blogger Nepal",
        style: 'subheader'
    }, {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta, lectus ac pellentesque suscipit, lacus felis cursus nisi, ac dictum velit ipsum ac dolor. Ut erat eros, dictum nec porttitor non, rhoncus sed augue. Maecenas consectetur aliquam lorem. Duis id congue risus. Ut vel rutrum massa, eget convallis nulla. Praesent ac sagittis diam. Aliquam erat volutpat. Fusce posuere sapien vitae suscipit interdum. Curabitur in mattis massa, vel aliquet ex. Vestibulum ornare lorem et sollicitudin commodo. Sed id vestibulum ligula. ',
        style: 'text'
    }, {
        text: '\n'
    }, {
        text: 'Nunc laoreet mauris sed vestibulum pellentesque. Nunc suscipit ante placerat orci pulvinar varius. Sed in velit maximus odio rutrum molestie et a enim. Mauris vitae dui rutrum tortor euismod tempor in eu diam. Fusce pulvinar nunc at feugiat pharetra. Morbi tempus accumsan finibus. Suspendisse dictum augue eu finibus volutpat. Suspendisse vel ipsum quis eros tincidunt posuere id eu nunc. Sed cursus sodales accumsan. Sed interdum dolor ac dignissim eleifend. ',
        style: 'text',

    }, {
        text: [
            '\nThe output of the code was ',
            {
                bold: true,
                fontSize: 15,
                text: "Hello World!"
            },
            " It worked. as expected"
        ]
    }],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            alignment: 'center',
            margin: [0, 30, 0, 20]
        },
        subheader: {
            fontSize: 14,
            margin: [0, 15, 0, 10],
            color: '#003893',
        },
        text: {
            alignment: 'justify'
        }
    }
}

pdfDoc = pdfmake.createPdfKitDocument(stylingDocs, {});
pdfDoc.pipe(fs.createWriteStream('pdfs/styling.pdf'));
pdfDoc.end();