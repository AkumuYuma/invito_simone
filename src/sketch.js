
let nomi;

function preload() {
    loadJSON("nomi.json", (risposta) => {
        nomi = risposta.nomi;
    });
}

async function fakeSaluto(offset) {
    return new Promise((resolve) => {
        // Primo paragrafo
        createP("Scegli il tuo nome").position(width / 2, 0);
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
                createButton("Si").position(width/2, 4 * offset);
                // Creo un paragraph per la risposta a no
                let miDispiace = createP();
                createButton("No")
                    .position(width/2 + offset, 4 * offset)
                    .mousePressed(() => {
                        miDispiace.html("Sei proprio sicuro?").position(width/2, 5 * offset);
                        let conferma = createP();
                        createButton("Si").position(width/2, 6 * offset)
                            .mousePressed(() => {
                                conferma.html("Va bene, " + nomeFake + ", andiamo avanti").position(width/2, 7 * offset);
                                resolve(selection.value());
                            });
                        createButton("No").position(width/2 + offset, 6 * offset)
                    });
            });
    })
}

async function banca(nomeInvitato, offset) {
    return new Promise((resolve) => {
        createP("Scherzo, lo so che sei " + nomeInvitato + ". Ora procederemo a spostare il credito dal tuo conto a quello di Simone Cantore. \n Per favore confermare o rifiutare.")
            .position(0, 0);
        createButton("Conferma").position(width/2, 3 * offset);
        // Tasto rifiuta che si sposta
        let rifiuta = createButton("Rifiuta");
        rifiuta.position(width/2 + 3 * offset, 3* offset);
        let contatore = 0;
        rifiuta.mousePressed(() => {
          rifiuta.position(random(width), random(height));
          contatore += 1;
          // Dopo un certo numero di volte risolvo la promessa
          if (contatore >= 8) resolve("")
        });

    })
}

function setup() {
    // Offset per il posizionamento
    let offset = 35;
    createCanvas(500, 500);
    background(255);
    fakeSaluto(offset)
        .then((valoreSCelto) => {
            let invitato = valoreSCelto;
            removeElements();
            banca(invitato, offset)
                .then(() => {
                    removeElements();
                });
        });
}

function draw() {
    // put drawing code here
}
