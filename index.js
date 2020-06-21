//#1
let ages = [3, 9, 23, 64, 2, 8, 28, 93, 42];

console.log (ages[ages.length - 1] - ages[0]);
//added 42 at the end of the array

let agesSum = ages.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(agesSum);
console.log(agesSum / ages.length);

//#2
let names = ['Sam', 'Tim', 'Tommy', 'Sally', 'Buck', 'Bob'];
let total = 0;
for(let i = 0; i < names.length; i++){
    let lengthOfNames = names[i].length;
    total = total + lengthOfNames;
}
let numberOfNames = names.length;
let averageLettersPerNames = total / numberOfNames;
console.log(averageLettersPerNames);

let concNames = '';
for(let i = 0; i < names.length; i++) {
    concNames = concNames + ' ' + names[i];
};
console.log(concNames);

//#5
let nameLengths = names.map(element => {
    return element.length;
});
console.log(nameLengths);

for(let i = 0; i < nameLengths.length; i++){
    total = total + nameLengths[i];
};
console.log(total);

//#5 alt method: for loop
let nameLengthsByLooping =[];
for(let i = 0; i < names.length; i++){
    nameLengthsByLooping.push(names[i].length);
};
console.log(nameLengthsByLooping);

//#6
for(let i = 0; i < names.length; i++){
    console.log(i);
};

//#7
function stringCreator(word, n){
    let finalString = '';
    for(let i = 0; i < n; i++){
        finalString = finalString + word;
    }
    return finalString;
};
console.log(stringCreator('Hello',3));

//#8
function fullNameMaker(firsName, lastName){
    let fullName = firsName + " " + lastName
    return fullName;
};
console.log(fullNameMaker('Pedro', 'Brieno'));

//#9
let arrayOfInts = [8, 45, 18, 21, 16, 37, 5];
function isOverOneHundred(numArray){
    let total = 0;
    for(let i = 0; i < numArray.length; i++){
        total = total + numArray[i];
    }
    console.log(total);
    if(total > 100){
        return true;
    } else {
        return false;
    }
};
console.log(isOverOneHundred(arrayOfInts));

//#10
let newNumArray = [99, 56, 74, 81, 93, 86, 67, 90];
let numOfTests = newNumArray.length;
let testTotal = newNumArray.reduce(function(acc, cur){
    return acc = acc + cur;
});

console.log(testTotal);
let testAverage = testTotal / numOfTests;
console.log('The test average was' + " " + testAverage);

//#11
let array1 = [8, 21, 19, 25, 33, 42, 37];
let array2 = [7, 11, 9, 11, 15, 25, 35];

function isGreaterThan(arr1, arr2){
    let arrayOneLength = arr1.length;
    let totalArray1 = arr1.reduce(function(acc, cur){
        return acc = acc + cur;
    });
    let average1 = totalArray1 / arrayOneLength;
    console.log(average1);

    let arrayTwoLength = arr2.length;
    let totalArray2 = arr2.reduce(function(acc, cur){
        return acc = acc + cur;
    });
    let average2 = totalArray2 / arrayTwoLength;
    console.log(average2);

    if(average1 > average2){
        return true;
    } else {
        return false; 
    }
}

console.log(isGreaterThan(array1, array2));

//#12
let moneyInPocket = 20
let isHotOutside = true

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
        return true 
    } else {
        return false 
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket))

//#13
//I created this function to help me keep track of my employee's monthly payroll, and give an accurate 10-99 for tax season.
let employeeHours = [80, 96, 40, 67, 73]
let hourlyRate = 12.75
function payrollCalculator(employeeHours, hourlyRate){
    let totalPayroll = 0
    for(let i = 0; i < employeeHours.length; i++){
      totalPayroll = totalPayroll + (employeeHours[i] * hourlyRate)
    }
    console.log(totalPayroll)
    let amountPaid = employeeHours.map(function(employeeHours){
        return employeeHours * hourlyRate
        console.log('Total payroll paid:', amountPaid)
    })
    console.log(amountPaid)
}
payrollCalculator(employeeHours, hourlyRate)