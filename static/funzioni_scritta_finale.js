function creaImmaginRifiuto() {
    background(0);
    removeElements();

    immagine_rifiuto = createImg("immagini/rifiuta", " ");
    if (width > height) {
        immagine_rifiuto
            .position(0, 0)
            .size(height / 2, height - height / 3);
    } else {
        immagine_rifiuto
            .position(0, 0)
            .size(width - width / 3, width);
    }

    createButton("Scherzo, ci sono!")
        .size(80, 80)
        .position(width/2, height/2 + 60)
        .mousePressed(creaImmagineInvito);

}


function creaImmagineInvito() {
    console.log(invitato);
    background(0);
    removeElements();

    if (width > height) {
        image(immagine_invito, 0, 0, height - height / 3, height - height / 3);
    } else {
        image(immagine_invito, 0, 0, width, width);
    }
    creaBottoneGiusto("Certo!", width / 3, height / 6, 0, height - height/3 + 50 );
    creaBottoneGiusto("Certo, ma in piccolo", 60, 60, width/3, height - height/3 + 50 );
}

function creaBottoneGiusto(testo, larghezza, altezza, positionx, positiony) {
    createButton(testo)
        .size(larghezza, altezza)
        .position(positionx, positiony)
        .mousePressed(() => {
            const http = new XMLHttpRequest();
            const url = "http://" + host + ":" + porta + "/conferma/" + invitato
            console.log(url);
            http.open("GET", url);
            http.send();
            fill(0, 255, 77);
            textSize(24);
            textFont("consolas");
            text("Grazie, \n la tua risposta \n è stata registrata!", width / 2, height - height / 3 + 100);
        });
}