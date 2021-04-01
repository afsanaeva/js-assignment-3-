//https://github.com/afsanaeva/js-assignment-3-.git

//problem 1. kilometer to meter conversion

function kilometerToMeter(meter){ 
    if(meter >=0){
        return kilometer = 1000 * meter;
    }
  else{
      return "distance cannot be negative"
  }
}

var result1 = kilometerToMeter(6);
console.log(result1);



//problem 2. budget Calculator for three parameter

function budgetCalculator(watch,mobile,laptop){
    if(watch>=0 && mobile>=0 && laptop >=0){
        return totalBudget = ((watch*50) + (mobile * 100) +(laptop * 500));
    }
   
    else {
        return "quantity can not be negative";
    }  
}
var result2 = budgetCalculator(9,3,1);
console.log(result2);




//problem 3. calculate hotel cost.

function hotelCost(days){
    var totalCost = 1;
    if(days<=10){
         totalCost = days * 100;
    }
    else if (days<=20){
        var first10Days = 10 * 100;
        var daysRemain = days - 10;
        var second10Days = daysRemain * 80;
         totalCost = first10Days + second10Days;
    }
    else{
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var daysRemain = days - 20;
        var third10Days = daysRemain * 50;
        totalCost =  first10Days + second10Days + third10Days;
    }
    return totalCost;

}
var result3 = hotelCost(31);
console.log(result3);



//problem 4. find the largest string from array.
// var names = ['afsana', 'rita', 'mitaa','eva', 'aymaan','ashraful']
// function megaFriend (names){
   
// }

//var str = ['afsana', 'rita', 'mitaa','eva', 'aymaan','ashraful']

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");
  console.log(findLongestWord);



