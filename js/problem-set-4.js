/*
 * Hello. 2 points.
 */

function hello() {
  var div = document.getElementById("output1");
  div.innerHTML="Hello, AP Computer Science Principles!";
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  name = prompt("Enter Your Name");
  var div = document.getElementById("output2");
  div.innerHTML="Hello, " + name + "!";


  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY
  let far = ((cels * 9/5) + 32).toFixed(2);
  var div = document.getElementById("output3");
  div.innerHTML= cels + " degrees Celsius equals " + far + " degrees Fahrenheit.";
  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.



  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((fahr - 32) * 5/9).toFixed(2);
  var div = document.getElementById("output4");
  div.innerHTML= fahr + " degrees Fahrenheit equals " + cels + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points. testing
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
  let miles = Math.floor(inches/63360);
  let yards = Math.floor((inches%63360)/36);
  let feet = Math.floor((inches-(miles*63360)-(yards*36))/12);
  let inch = inches-(miles*63360)-(yards*36)-(feet*12);
  var div = document.getElementById("output5");
  div.innerHTML= "Miles: " + miles + "<br/>Yards: " + yards + "<br/>Feet: " + feet + "<br/>Inches: " + inch;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let kilometers = Math.floor(centimeters/100000);
  let meters = Math.floor((centimeters%100000)/100);
  let centi = centimeters-(kilometers*100000)-(meters*100);
  var div = document.getElementById("output6");
  div.innerHTML= "Kilometers: " + kilometers + "<br/>Meters: " + meters + "<br/>Centimeters: " + centi;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let gallons = Math.floor(fluidOunces/128);
  let quarts = Math.floor((fluidOunces%128)/32);
  let pints = Math.floor((fluidOunces-(gallons*128)-(quarts*32))/16);
  let cups = Math.floor((fluidOunces-(gallons*128)-(quarts*32)-(pints*16))/8);
  let floz = fluidOunces-(gallons*128)-(quarts*32)-(pints*16)-(cups*8);
  var div = document.getElementById("output7");
  div.innerHTML= "Gallons: " + gallons + "<br/>Quarts: " + quarts + "<br/>Pints: " + pints + "<br/>Cups: " + cups + "<br/>Fluid Ounces: " + floz;


  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let tons = Math.floor(ounces/32000);
  let pounds = Math.floor((ounces%32000)/16);
  let ounce = Math.floor(ounces-(tons*32000)-(pounds*16));
  var div = document.getElementById("output8");
  div.innerHTML= "Tons: " + tons + "<br/>Pounds: " + pounds + "<br/>Ounces: " + ounce;


  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = Math.floor(pennies/100);
  let quarters = Math.floor((pennies-(dollars*100))/25);
  let dimes = Math.floor((pennies-(dollars*100)-(quarters*25))/10);
  let nickels = Math.floor((pennies-(dollars*100)-(quarters*25)-(dimes*10))/5);
  let penny = pennies-(dollars*100)-(quarters*25)-(dimes*10)-(nickels*5);
  var div = document.getElementById("output9");
  div.innerHTML= "Dollars: " + dollars + "<br/>Quarters: " + quarters + "<br/>Dimes: " + dimes + "<br/>Nickels: " + nickels + "<br/>Pennies: " + penny;


  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
  let pennies = (amount*100)
  let quarters = Math.floor(pennies/25);
  let dimes = Math.floor((pennies-(quarters*25))/10);
  let nickels = Math.floor((pennies-(quarters*25)-(dimes*10))/5);
  let penny = Math.floor(pennies-(quarters*25)-(dimes*10)-(nickels*5));
  let coins = quarters + dimes + nickels + penny;

  if coins = 1 {
  var div = document.getElementById("output10");
  div.innerHTML= coins + " coin.";
}

  if coins > 1 {
    var div = document.getElementById("output10");
    div.innerHTML= coins + " coins.";
  }
  


  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
