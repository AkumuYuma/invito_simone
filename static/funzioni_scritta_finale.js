function creaImmaginRifiuto() {
    background(0);
    removeElements();

    immagine_rifiuto = createImg("media/rifiuto.gif", " ");
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
    background(0);
    removeElements();
    // Faccio partire la musica
    audio_sottofondo.play(); 

    // Metto un timeout per reindirizzare alla fine dell'invito 
    setTimeout(() => {
        window.location.href = "/finito"; 
    }, 30000); 

    if (width > height) {
        image(immagine_invito, 0, 0, height - height / 3, height - height / 3);
    } else {
        image(immagine_invito, 0, 0, width, width);
    }
    persona = localStorage.getItem("invitato"); 
    creaBottoneGiusto("Certo!", width / 3, height / 6, 0, height - height/3 + 50, persona);
    creaBottoneGiusto("Certo, ma in piccolo", 60, 60, width/3, height - height/3 + 50, persona);
    
}

function creaBottoneGiusto(testo, larghezza, altezza, positionx, positiony, persona) {
    createButton(testo)
        .size(larghezza, altezza)
        .position(positionx, positiony)
        .mousePressed(() => {
            const http = new XMLHttpRequest();
            const url = "/conferma/" + persona
            console.log(url);
            http.open("GET", url);
            http.send();
            fill(0, 255, 77);
            textSize(24);
            textFont("consolas");
            text("Grazie, " + persona + "\n la tua risposta \n è stata registrata!", width / 2, height - height / 3 + 100);
        });
}