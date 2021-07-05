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
    let offset = 100;
    createCanvas(windowWidth, windowHeight);
    background(0);
    fakeSaluto(offset)
        .then((valoreSCelto) => {
            let invitato = valoreSCelto;
            removeElements();
            banca(50)
                .then(() => {
                    sessionStorage.setItem("invitato", invitato); 
                    removeElements();
                    window.location.replace("http://" + host + ":" + porta + "/matrix");
                });
        });
}