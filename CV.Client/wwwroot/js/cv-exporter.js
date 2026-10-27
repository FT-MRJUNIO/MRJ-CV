window.cvExporter = {
    generatePDF: function () {
        const element = document.querySelector('.cv-paper');

        const opt = {
            margin: 0,
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true, 
                logging: false
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            },
            pagebreak: { mode: 'avoid-all', before: '#pageel' }
        };

        html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
        }).save();
    }
};