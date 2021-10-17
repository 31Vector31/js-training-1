function findArithmeticMeanFirstDecision(array) {
    let result = array.filter((element, index) => element % 2 === 1 && index % 2 === 0);
    return result.reduce((previousValue, currentValue) => previousValue + currentValue) / result.length;
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
    let initialValue = 0;
    return array.reduce((accumulator, currentValue) => accumulator + currentValue.amount * currentValue.price, initialValue);
}

function getACheckObject(array) {
    let result = [];
    array.forEach(element => {
        result.push({name: element[0], amount: element[1], price: element[2]});
    });
    return result;
}

function filterObject(obj) {
    let result = {};
    for (let prop in obj) {
        if (prop.includes("a"))
            result[prop] = obj[prop];
    }
    return result;
}