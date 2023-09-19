// Chapter 17 - 20 (for Loops)-------------------------------
//    Home Assignment-------------------

// Q1---------------

// for(i = 0; i <= 9; i++){
//     document.write("Welcome to Javascript Course" + "<br>");
// }


// Q2------------

// for( i = 0; i <= 11; i++ ){
//     document.write("abc" + " " + i + "<br>");

// }

// Q3------------- 

// for (var i = 0; i <= 4; i++){
//     document.write("Note: Complete this statement");
// }

// Q4-----------

// for(var num = 0; num < 100; num++){
//     document.write("Welcome page! " + num + "<br>");
// }

// Q5------------

// for(var i = 3; i > 0; i--){
//     document.write("abc" + "<br>");
// }

// Q6-----------

// var arr =[1 ,2 ,3, 4, 5, 6];

// arrElements = arr.length;

// console.log(arrElements);

// Q7-------------

//  var flag = true;

// Q8-------------

// var arr =["cat ", "dog ", "horse ", "rabbit", "fish "];

// for(var i = 0; i <= arr.lenght; i++);{
//     console.log(arr);
// }

// Q9------------

// for(var i = 0; i <= 10; i++){
//     if( i === 1 ) {
//         alert("The counter is: " + i);
//         break;

//     }
// }

// Q10-------------

//  var arr =["bilal ", "faraz ", "abc " , "xyz " , "hamza "];

//   var firstName = prompt("Enter your first name");

//   var matchFound = false;
//   for (var i = 0; i < arr.length; i++){

//      if(firstName === arr[i]){
//        alert("Enter!");
//        matchFound = true;
//        break;
//      } 
//    }

//    if(matchFound === false) {
    
//     alert("Please write correct user name");
//  }

// Q11------------

//  var list = [12, 24, 43, 56, 65, 74];

//  var userInput = +prompt("Enter your number");

//  var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true;
//         break;
//     }
// }

// if (matchFound === false) {
//     alert("No match found");
// }

// Q12--------------

// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < firstArr.length; i++) {
//     for (var a = 0; a < secondArr.length; a++) {
//         document.write(firstArr[i] + secondArr[a] + "<br>");
//     }
// }