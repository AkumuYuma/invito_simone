let p, selection, submit, selected;

let nomi = ["Giorgio", "Franco", "Mimmo", "Andrea"];

function setup() {
    noCanvas();
    p = createP("Scegli il tuo nome");
    selection = createSelect();
    for (let nome of nomi) {
        selection.option(nome);
    }
    submit = createButton("Submit");
    selected = createP();
    submit.mousePressed(() => {
        selected.html("Hai selezionato Giorgio Vanni \n giusto?");
        createButton()
    })

    // put setup code here
}

function draw() {
    // put drawing code here
}
