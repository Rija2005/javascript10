//to lower case is u


// let cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase();
//  let cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
// if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }

// // else{
// //     alert("its not cleanest city")
// // }
//  }




//index of 

// let country = "Pakistan";
// console.log(country.indexOf("t"));

// //if we want to find last index


// let text ="To be or not to be";
// let segIndex =text.lastIndexOf("be");
// console.log(segIndex);




//characte add; only show one character
//slice ; is used to bought all character we want
// let firstName = prompt("enter your first name");
// let firstChar = firstName.slice(0,1)
// console.log(firstChar);


// let firstName = prompt("enter your first name");
// let firstChar = firstName.charAt(2);
// console.log(firstChar);


// //for subtract any character

// let msg = "HELLO WORLD";
// let letter = msg.charAt(msg.length-3);
// console.log(letter);


// //replace ;;its replace the value

// let site ="Visit Microsoft";
// let result= site.replace("Microsoft","ChatGpt")
// console.log(result);


//GLOBAL REPLACE(g)
//GLOBAL INSTANCE(gi)

// // used to replace twosimilar words
// let sms ="Mr Blue has a blue house and blue car"
// let results=sms.replace(/blue/g ,"red");
// console.log(results);

// //used to replace two similar words even if they are different cases i.e upper or lower.
// let sms ="Mr Blue has a blue house and blue car"
// let results=sms.replace(/blue/gi ,"red");
// console.log(results);


// //ROUNDING NO
// let scoreAvg =Math.round(3.45678);
// console.log(scoreAvg);

// //ceil;proper round off to  nearest integer
//  let ceilNum= Math.ceil(2.5677)
//  console.log(ceilNum);


//  //floor ;return larger integer less than  num

//  let floorNum= Math.floor(2.5677)
//  console.log(floorNum);

//convert string in to integers

//  let currentAge = prompt("Enter your age.");
//   let yearsEligibleToVote = currentAge - 18;
//   console.log(yearsEligibleToVote);
// //string converts in to  integer
//   var profit = "200" - "150";
//   console.log(profit);

// //its show result duck is not a number
//   var number = "200" - "duck";
//   console.log(number);

// //+exprssion cocantinate rather than add but rather expression do maths
//   var result = "200" + 150;
//   console.log(result);


// //its concagtinate disscus above
//   let  Age = prompt("Enter your age.");
// let qualifyingAge = Age + 14;
// console.log(qualifyingAge);

// //parseint  converts string in to integer
// let  myInteger = parseInt("1.9999");//ans(1) bcz its not round off the value
// console.log(myInteger);
// //it is vice versa of parseint
// var myFractional = parseFloat("1.9999");
// console.log(myFractional);

// let result = parseFloat('123.22, 456, 789');
// console.log(result);//e.g of parsefloat

// const results = parseFloat('This is the number 123.22');
// console.log(results);//e.g of parse float

// //Number is also work as parseint
// var integerString = "24"
//  var num = Number(integerString);
//  console.log(integerString);


//  var floatingNumString = "24.9876";
// var num1 = Number(floatingNumString);
// console.log(num1);


// //Converting a number to a string, perhaps so you can format it, is straightforward.

// let numberAsNumber = 1234;
//  let numberAsString = numberAsNumber.toString();
//  console.log(numberAsString);

//Controlling the length of decimals

let price = 9.95;
let sale = 0.065;
let total = price + (price * sale);
console.log(total);//ans(10.6074)its very long value
//to short the value we used this
var prettyTotal = total.toFixed(2);//2 show two value after decimal i.e 10.60
console.log(prettyTotal);

let num =12345;
var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";//replace last character to 6
}
num = Number(str);
prettyNum = num.toFixed(2);//add on ponts afet number
console.log(prettyNum);





