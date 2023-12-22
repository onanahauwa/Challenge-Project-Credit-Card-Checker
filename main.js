// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const validateCred = arr => {
  let checkArr = [];
  let unCheckArr = [];
  let sumUncheckArr = 0;
  let finalSum = 0;
  //This for loop pushes numbers to the checkArr array starting from the last number in order to seperate the array of numbers into two seperate arrays, one array to be checked and the other array not checked. Remember that push will push elements to the end of the array, so the first number will be the last number.
  for (let i = arr.length - 1; i >= 0; i -= 2){
    checkArr.push(arr[i]);  
  }
  //console.log(checkArr);
  //this for loop does the same thing as the previous for loop except it starts from the second to the last number. 
  for(let i = arr.length - 2; i >= 0; i -= 2){
    unCheckArr.push(arr[i]);
  }
  //console.log(unCheckArr);
  for (let i = 0; i < unCheckArr.length; i++){
    let num =  unCheckArr[i] * 2;
    if(num > 9){
      num -= 9;
      sumUncheckArr += num;
    }
    else {
      sumUncheckArr += num;
    }
  }
  const sumCheckArr = checkArr.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
  })
  finalSum  = (sumCheckArr + sumUncheckArr) % 10;
 return finalSum === 0;
}
console.log(validateCred(mystery5));

const findInvalidCards = nestedArr => {
  let invalid = [];
  for(let i = 0; i < nestedArr.length; i++){
    let value = validateCred(nestedArr[i]);
     if(value === false){
        invalid.push(nestedArr[i]);
     }
  }
  return invalid;
}
//console.log(findInvalidCards(batch));

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

const idInvalidCardCompanies = nestedArr => {
    let newArr = findInvalidCards(nestedArr);
    let company = [];
  for (let i = 0; i < newArr.length; i++){
    let arr = newArr[i][0];
    if (arr === 3){
      company.push('Amex (American Express)');
    }else if (arr === 4){
      company.push('Visa');
    }else if (arr === 5){
      company.push('Mastercard');
    }else if (arr === 6){
      company.push('Discover');
    }else {
      console.log('Company not found');
    }
  }
  company = removeDuplicates(company);
  return company;
}
//console.log(idInvalidCardCompanies(batch));



