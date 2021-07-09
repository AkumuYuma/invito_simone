function setup() {
    let offset = 50
    createCanvas(windowWidth, windowHeight); 
    createP("Va bene, è tutto finito, puoi chiudere e andare a casa.").position(10, offset);
    setTimeout(() => {
        createP("Puoi andare ho detto!").position(10, 2 * offset);
    }, 10000); 
    setTimeout(() => {
        createP("Oh e te ne vuoi andare").position(10, 3 * offset);
    }, 20000); 
    setTimeout(() => {
        createP("Va bene, sei stato coraggioso, hai vinto un premio").position(10, 4 * offset); 
    }, 30000); 
    setTimeout(() => {
        createButton("Viva la libertà, viva la prigionia!").position(width/3, 5 * offset)
        .mousePressed( () => {
            window.location.href = "/media/easterEgg.mp4"
        })
    }, 35000); 
}
