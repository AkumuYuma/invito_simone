let scritta = `In tempo di pandemia questo è un "virus" innocuo, che ha il solo obiettivo di metterci insieme, di contagiare amicizia, di ridarci la gioia di una giornata da 
trascorrere all'insegna della spensieratezza. Vieni alla mia festa?`; 


let x;
let y; 
let offset;

let host; 
let porta;

function preload() {
  loadJSON("variabili", (variabili) => {
    host = variabili.host; 
    porta = variabili.porta;
  })
}

function setup() {
    console.log(host, porta); 
    createCanvas(windowWidth, windowHeight);
    background(0); 
    textFont("Consolas"); 
    textSize(30); 
    x = width/30; 
    y = height/3; 
    offset = width/80; 
}


let i = 0;

function draw() {
    frameRate(30); 
    let lettera = scritta[i]
    fill(0, 255, 70);
    text(lettera, x, y);
    if (x >= width - width/20) { 
        x = width/30; 
        y += 30; 
    }
    x += textWidth(lettera);

    if (i < scritta.length - 1) {
        i += 1;
    } else {
        noLoop();
        createButton("Si")
        .position(width/2, y + 30)
        .mousePressed(() => {
            invitato = sessionStorage.getItem("invitato"); 
            console.log(invitato);
            const http = new XMLHttpRequest();
            const url =  "http://" + host + ":" + porta + "/conferma/" + invitato 
            console.log(url); 
            http.open("GET", url); 
            http.send(); 
            createP("Confermato!"); 

        }); 
        createButton("No")
        .position(width/2 + 50, y + 30)
    }
}