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

    forEach(callback, thisArg = this.array) {
        for (let i = 0; i < thisArg.length; i++) {
            callback(thisArg[i], i, thisArg);
        }
    }

    map(callback, thisArg = this.array) {
        let result = [];
        for (let i = 0; i < thisArg.length; i++) {
            result[i] = callback(thisArg[i], i, thisArg);
        }
        return result;
    }

    filter(callback, thisArg = this.array) {
        let result = [];
        for (let i = 0, j = 0; i < thisArg.length; i++) {
            if (callback(thisArg[i], i, thisArg)) result[j++] = thisArg[i];
        }
        return result;
    }

    find(callback, thisArg = this.array) {
        for (let i = 0; i < thisArg.length; i++) {
            if (callback(thisArg[i], i, thisArg)) return thisArg[i];
        }
    }
}