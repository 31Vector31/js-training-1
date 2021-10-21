function findArithmeticMeanFirstDecision(array) {
    let amount = 1;
    return array.reduce((accumulator, currentValue, index) =>
        accumulator + ((currentValue % 2 === 1 && index % 2 === 0) ? (amount++, currentValue) : 0)
    ) / amount;
}

function findArithmeticMeanSecondDecision(array) {
    let sum = 0;
    let amount = 0;
    array.forEach((element, index) => {
        if (element % 2 === 1 && index % 2 === 0) {
            sum += element;
            amount++;
        }
    })
    return sum / amount;
}

function getTheAmountOfTheCheck(array) {
    return array.reduce((accumulator, currentValue) => {
        let {amount, price} = currentValue;
        return accumulator + amount * price;
    }, 0);
}

function getACheckObject(array) {
    return array.reduce((accumulator, currentValue) => {
        let [name, amount, price] = currentValue;
        accumulator.push({name: name, amount: amount, price: price});
        return accumulator;
    }, []);
}

function filterObject(obj) {
    let result = {};
    for (let prop in obj) {
        if (prop.includes("a"))
            result[prop] = obj[prop];
    }
    return result;
}

function filterObjectSecondDecision(obj) {
    let result = {};
    Object.keys(obj).forEach(key => {
        if (key.includes("a")) result[key] = obj[key];
    });
    return result;
}