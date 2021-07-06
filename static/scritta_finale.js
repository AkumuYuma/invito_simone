let scritta = `In tempi di pandemia, il SiViF-18, acronimo di SImonVIrus Friendship 18, è un "virus" innocuo!!! Il SiViF-18 ha il solo obiettivo di tenerci insieme, di contagiare amicizia, di ridarci la gioia di una giornata da trascorrere all'insegna della spensieratezza.
Vuoi lasciarti contagiare? Vieni alla mia festa?`;

let x;
let y;
let offset;

let host;
let porta;

let immagine_invito;
let immagine_rifiuto;

function preload() {
    loadJSON("variabili", (variabili) => {
        host = variabili.host;
        porta = variabili.porta;
    });

    loadImage("immagini/conferma", (img) => {
        immagine_invito = img;
    });
}

function setup() {
    console.log(host, porta);
    createCanvas(windowWidth, windowHeight);
    background(0);
    textFont("Consolas");
    textSize(30);
    x = width / 30;
    y = height / 3;
    offset = width / 80;
}

let i = 0;
function draw() {
    invitato = sessionStorage.getItem("invitato");
    frameRate(30);
    let lettera = scritta[i]
    fill(0, 255, 70);
    text(lettera, x, y);
    if (x >= width - width / 15) {
        x = width / 30;
        y += 30;
    }
    x += textWidth(lettera);

    if (i < scritta.length - 1) {
        i += 1;
    } else {
        noLoop();
        createButton("Si")
            .position(width / 2, y + 30)
            .mousePressed(creaImmagineInvito);

        createButton("No")
            .position(width / 2 + 50, y + 30)
            .mousePressed(creaImmaginRifiuto);
    }
}