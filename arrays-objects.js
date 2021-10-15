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