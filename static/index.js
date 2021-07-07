let nomi;

function preload() {
    loadJSON("nomi", (risposta) => {
        nomi = risposta.nomi;
    });
}


function setup() {
    // Offset per il posizionamento
    let offset = 100;
    createCanvas(windowWidth, windowHeight);
    background(0);
    fakeSaluto(offset)
        .then(() => {
            console.log(localStorage.getItem("invitato"))
            removeElements();
            banca(50)
                .then(() => {
                    removeElements();
                    window.location.href = "/matrix";
                });
        });
}