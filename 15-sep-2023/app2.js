// class task ----------------

// ARRAYS AND LOOP-----------------------

// Q3--------

// for(var i = 1; i<= 10 ; i++){
//   document.write(i + " " + "<br>");
// }

// Q4----------

//  var userInput = +prompt("Enter your number to generate multiplication of table ");

//  var tablelength = +prompt("Enter your lenght");

//  document.write("Multiplication table of " + userInput + "<br>" +
//    "Length " + tablelength + "<br>" + "<br>");

//  for (var i = 1; i <= tablelength; i++){
//     document.write(userInput + " x " + i + " = " + userInput * i + "<br>");
//  }


// Q5------------

// var fruits = ["apple" , "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length; i++){
//   document.write(fruits[i] + "<br>");
  
// }

// for (var i = 0; i < fruits.length; i++){
//   document.write("Element at index " + i  + " " + fruits[i] + "<br>");
  
// }

// Q6-----------

// a/////////////

// document.write("<h3>" + "Counting: " + "</h3>");

// for ( i = 1; i <= 15; i++){

// document.write(i + ", ");

// }

// b/////////////////

// document.write("<h3>" + "Reverse Counting: " + "</h3>");

// for ( i = 10; i > 0 ; i--){

//   document.write(i + ", ");

// }

// c///////////////

// document.write("<h3>" + "Even: " + "</h3>");

// for ( i = 0; i <= 20; i += 2){

//   document.write(i + ", ");
  
//   }

// d//////////////////

// document.write("<h3>" + "Odd: " + "</h3>");

// for ( i = 1; i <= 20; i += 2){

//   document.write(i + ", ");
  
//   }

// e//////////////

// document.write("<h3>" + "Series: " + "</h3>");

// for ( i = 2; i <= 20; i += 2){

//   document.write(i + "k " + ", ");
  
//   }

// Q7----------------

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do want to order Sir/Ma'am?" , "cookie");

// var items = true;

// for(var i = 1; i < a.length; i++){
//   if(a[i] === userInput){
//       items = true;
//       document.write(userInput + " is <b> available </b> at index " + [i] + " in our bakery");
//       break;
//   }

// }
// if(a[i] !== userInput){
//     document.write("We are sorry. " + userInput + " is <b> not available </b> in our bakery");
// }

// Q8------------

//  var arr = [24, 53, 78, 91, 12];

//  var largestNumber = arr[0];

//  for (var i = 1; i < arr.length; i++) {
//      if (arr[i] > largestNumber) {
//          largestNumber = arr[i];
//      }
    
//  }

// document.write("Array Items: " + arr + "," + "<br>");
// document.write("The largest number is " + largestNumber + "<br>");

//  Q9------------

// var arr = [24, 53, 78, 91, 12];

// var smallestNumber = arr[0];

// for(var i = 0; i < arr.length; i++){
//    if(arr[i] < smallestNumber){
//     smallestNumber = arr [i];
//    }
// }
 
// document.write("Array Items: " + arr + "," + "<br>");
//  document.write("The smallest number is " + smallestNumber);

// Q10---------------

// for( i = 5; i <= 100; i += 5){
//   document.write(i + ", ");
// }

