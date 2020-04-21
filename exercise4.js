function tipAmount(billAmount, levelOfService){
    let tip = 0
    if (levelOfService === "good"){
        tip = billAmount * .20;
    }
    else if (levelOfService === "fair"){
        tip = billAmount * .15;
    }

    else if (levelOfService === "bad"){
        tip = billAmount * .10;
    }
    return tip;
}

// console.log(tipAmount(123, 'good'));

function totalAmount(tip, billAmount) {
    let total = tip + billAmount;
    return total;
}

// console.log(totalAmount(tipAmount(190.75, 'good'), 190.75));

function splitAmount(billTotal, splitWays) {
    let finalAmount = billTotal / splitWays;
    return finalAmount;
}

console.log(splitAmount(totalAmount(tipAmount(40, 'fair'), 40), 2));