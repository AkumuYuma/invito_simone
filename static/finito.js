function setup() {
    createP("Va bene, è tutto finito, puoi chiudere e andare a casa.");
    setTimeout(() => {
        createP("Puoi andare ho detto!");
    }, 10000); 
    setTimeout(() => {
        createP("Oh e te ne vuoi andare");
    }, 20000); 
    setTimeout(() => {
        createP("Va bene, sei stato coraggioso, hai vinto un premio"); 
    }, 30000); 
    setTimeout(() => {
        let div = createDiv(); 
        div.html(
        createButton("Viva la libertà, viva la prigionia!")
            .mousePressed(() => window.location.href = "/video/easterEgg") );
        div.style("align-items", "center"); 
    }, 35000); 
}

