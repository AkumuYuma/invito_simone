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
        background(0);
    }

    show() {
        background(0);
        let lunghezza = 200;
        let progress = map(this.s, 0, 100, 0, lunghezza);
        fill(0, 255, 77);
        textSize(20);
        textFont('consolas')
        text('Avanzamento: ' + this.s + '%', this.x, this.y - 20);


        rect(this.x, this.y, progress, 20, 20);
        stroke(255);
        noFill();
        rect(this.x, this.y, lunghezza, 20, 20);
    }
}
