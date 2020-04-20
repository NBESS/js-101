function tipAmount (billAmount, levelOfService){
    if (levelOfService === "good"){
        tipPercentage = .20;
    }
    else if (levelOfService === "fair"){
        tipPercentage = .15;
    }

    else if (levelOfService === "bad"){
        tipPercentage = .10;
    }
    tip = billAmount * tipPercentage;
    return tip;
}

console.log(tipAmount(100, 'fair'));