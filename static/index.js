let nomi, porta, host;

function preload() {
    loadJSON("nomi", (risposta) => {
        nomi = risposta.nomi;
    });

    loadJSON("variabili", (variabili) => {
        porta = variabili.porta; 
        host = variabili.host;
    })
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
                    removeElements(sessionStorage.setItem("invitato", invitato));
                    window.location.replace("http://" + host + ":" + porta + "/matrix");
                });
        });
}

function draw() {
    // put drawing code here
}
