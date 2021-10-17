class CustomArray {
    constructor(...args) {
        this.array = args;
    }

    push(...args) {
        for (let i = this.array.length, j = 0; j < args.length; i++, j++) {
            this.array[i] = args[j];
        }
        return this.array.length;
    }

    pop() {
        let lastElement = this.array[this.array.length - 1];
        let temp = [];
        for (let i = 0; i < this.array.length - 1; i++) {
            temp[i] = this.array[i];
        }
        this.array = temp;
        return lastElement;
    }
}