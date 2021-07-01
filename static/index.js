let nomi;

function preload() {
    loadJSON("nomi.json", (risposta) => {
        nomi = risposta.nomi;
    });
}


function setup() {
    // Offset per il posizionamento
    let offset = 35;
    createCanvas(windowWidth, windowHeight);
    background(255);
    fakeSaluto(offset)
        .then((valoreSCelto) => {
            let invitato = valoreSCelto;
            removeElements();
            banca(50)
                .then(() => {
                    removeElements();

                });
        });
}

function draw() {
    // put drawing code here
}
