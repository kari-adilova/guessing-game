class GuessingGame {
    constructor() {}

    setRange(min, max) {
        let array = [];
        for (let i = min; i <= max - min; i++) {
            array.push(i);
        }
        this.array = array;
        this.min = 0;
        this.max = array.length - 1;
    }
    

    guess() {
        let middle = Math.round((this.max + this.min) / 2);
        this.middle = middle;
        return this.array[middle];

    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
