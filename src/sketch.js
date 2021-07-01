
let nomi;


class Count {
    constructor(start, updateTime, x, y) {
        this.s = start;
        this.w = updateTime;
        this.x = x;
        this.y = y;
    }


    start() {
        if (!this.done) {
            this.aggiornamento = setInterval(() => {
                this.counter();
                this.show();
            }, this.w);
        }
    }

    counter() {
        if (this.s < 100) {
            this.s++;
        }
    }

    reset() {
        this.s = 0;
    }

    delete() {
        clearInterval(this.aggiornamento);
        background(255);
    }

    show() {
        background(255);
        let lunghezza = 200;
        let progress = map(this.s, 0, 100, 0, lunghezza);
        fill(0);
        textSize(20);
        textFont('monospace')
        text('Avanzamento: ' + this.s + '%', this.x, this.y - 20);

        rect(this.x, this.y, progress, 20, 20);
        stroke(0);
        noFill();
        rect(this.x, this.y, lunghezza, 20, 20);
    }
}


function preload() {
    loadJSON("nomi.json", (risposta) => {
        nomi = risposta.nomi;
    });
}

async function fakeSaluto(offset) {
    return new Promise((resolve) => {
        // Primo paragrafo
        createP("Seleziona il tuo nome").position(width / 2, 0);
        // Selezione da popolare
        let selection = createSelect();
        selection.position(width / 2, offset);
        // Popolo la selezione
        for (let nome of nomi) {
            selection.option(nome);
        }
        // Risposta alla scelta
        let risposta = createP().position(width / 2, 3 * offset);
        // Nome falso da mostrare
        let nomeFake = "Giorgio Vanni";
        // Gestione del pulsante di conferma
        createButton("Conferma")
            .position(width / 2, 2 * offset)
            .mousePressed(() => {
                // Do risposta sbagliata
                risposta.html("Hai selezionato " + nomeFake + "\n giusto?");
                // Creo due pulsanti per la scelta
                createButton("Si").position(width / 2, 4 * offset);
                // Creo un paragraph per la risposta a no
                let miDispiace = createP();
                createButton("No")
                    .position(width / 2 + offset, 4 * offset)
                    .mousePressed(() => {
                        miDispiace.html("Sei proprio sicuro?").position(width / 2, 5 * offset);
                        let conferma = createP();
                        createButton("Si").position(width / 2, 6 * offset)
                            .mousePressed(() => {
                                conferma.html("Va bene, " + nomeFake + ", andiamo avanti").position(width / 2, 7 * offset);
                                resolve(selection.value());
                            });
                        createButton("No").position(width / 2 + offset, 6 * offset)
                    });
            });
    })
}

async function banca(offset) {
    return new Promise((resolve) => {
        createP("Stiamo prelevando i dati del tuo dispositivo.").position(width / 2 - offset, 0);
        let barra = new Count(0, 100, width/2, 2 * offset);
        barra.start();
        createP("Clicca annulla per interrompere l'operazione").position(width / 2 - offset, 3 * offset)
        // Tasto rifiuta che si sposta
        let rifiuta = createButton("Rifiuta");
        rifiuta.position(width / 2 + 3 * offset, 4 * offset);
        let contatore = 0;
        rifiuta.mousePressed(() => {
            rifiuta.position(random(width), random(3 * offset, height));
            contatore += 1;
            // Dopo un certo numero di volte risolvo la promessa
            if (contatore >= 8) {
                barra.delete();
                resolve("");
            }
        });

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
                    removeElements();

                });
        });
}

function draw() {
    // put drawing code here
}
