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
                createButton("Si").position(width / 2, 4 * offset)
                    .mousePressed(() => {
                        resolve(selection.value());
                    });
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
                        createButton("No").position(width / 2 + offset, 6 * offset);
                    });
            });
    })
}

async function banca(offset) {
    return new Promise((resolve) => {
        createP("Stiamo prelevando i dati del tuo dispositivo.").position(width / 2 - offset, 0);
        // Creo una nuova barra e la faccio partire 
        let barra = new Count(0, 100, width/2, 2 * offset);
        barra.start();
        // Setto un intervallo per controllare ogni 50 ms che la barra abbia raggiunto 100, se ha raggiunto cancello e risolvo la promessa
        setInterval(() => {
            if (barra.s >= 100) {
                barra.delete(); 
                resolve("");
            }
        }, 50); 

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
