//CHAPTER#1//

//Q1
// alert("Marium");
// alert("Abidi");
// alert("mariumabidi7@gmail.com");
// alert(+92 482302324);
// alert("pasword123");

//Q2
// alert ("You're learning JavaScript");

//Q3
//alert("HEY! Good Morning");

//CHAPTER#2//

//Q1
//var myFirstName;

//Q2
// var rollNo
// rollNo= "EB20103125";
// alert(rollNo)

//Q3
// var teamName= "Team Devs"
// alert (teamName);

//Q4
// var bestMan ="Charlie";
// bestMan= "Marium's Father";
// alert(bestMan);

///CHAPTER#3///

//Q1
// var caseQty

//Q2
// caseQty= 144;

//Q3
// var num =9;

//Q4
// var sumOfNum
// sumOfNum= 5+2;
// alert(sumOfNum);

//Q5
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge; 
// alert(orderTotal); *110*

//Q6
// var number = 3
// number= number+2;
// alert(number);


//CHAPTER#4//

//Q1
//var product cost = 3.45;
//var productCost = 3.45;
//alert(productCost);

//Q2
// var Nameofband;
// var nameOfBand;

//Q3
//var legalNamedVariable123= 5;

//Q4
//var mariumAbidi 

//Q5
//A variable name can't contain any spaces. 
//A variable name can contain only letters, numbers, dollar signs, and underscores.
//A variable name can't be any of JavaScript's keywords, it can contain keywords.
//Capital letters are fine, but be careful. Variable names are case sensitive. 
//Use CamelCase
//Make your variable names descriptive

//CHAPTER#5//

//Q1
// % modulus

//Q2
// var num = 20 % 6;
// alert(num); *2*

//Q3
//var largeNum= 2000000;;---//1000*2000

//Q4
// var x= 10;
// var y= 4;
// var result= x-y;
// alert (result);

//Q5
// var variable1= 222;
// var variable2= 2;
// var reminder= variable1/variable2;
// alert(reminder);

// Q6
//  alert(12*2);

///CHAPTER#6///

//Q1
// var x= 3
//  x= x++;

//Q2
// var num =100
// num = --num;
// alert(num);

//Q3
// var x = 50; 
// var y = x++; 
// alert(y); *50*

//Q4
// var y = 50;
// var z = --y; 
// alert(z) //49//

//Q5
// var num=100;
// var newNum=--num;
// alert(newNum);

// //Q6
// var increment=25;
// var preIncrement= ++increment;
// alert(preIncrement);

// //Q7
// var number=33;
// var newNumber=++number;
// alert(newNumber);

//CHAPTER#7//

//Q1
// var calculatedNum = 2 + (2 * 6);
// alert(calculatedNum); //14

//Q2
// var calculatedNum = (2 + 2) * 6; 
// alert(calculatedNum); //24

//Q3
// var calculatedNum = (2 + 2) * (4 + 2);
// alert(calculatedNum); //24

//Q4
// var calculatedNum = ((2 + 2) * 4) + 2;
// alert(calculatedNum); //18

//Q6
// var a=(2 + 2) * ( 4 + 10);
// alert(a);//56

//Q7
// var b =2 + (2 * 4) + 10;
// alert (b);//20

//Q8
// var c=4 /(2 * 4)
// alert(c); //0.5

//CHAPTER#8///

//Q1
// var num = "2" + "2"
// alert(num); //22

//Q2
//  var message = ("Hello," + "Dolly");
// alert(message); //Hello,Dolly

//Q3
// alert("33" + 3); //333

//Q4
// alert("Pakistan"+" "+"Zindabad");

//Q5
// var concatenation="Marium";
// alert(concatenation+887)

//Q6
// var x= "MARIUM";
// var y= "ABIDI";
// var z= x + " " + y;
// alert (z);


//CHAPTER#9//

//Q1
// var userName= prompt("Enter Your First Name");

//Q2
// var country= prompt("Country?", "China")

//Q3
// var yourName = prompt(Enter Your Name");
// var yourName = prompt ("Enter Your Name");

//Q4
// var message = prompt("Enter Your Message","Hello!")

//Q5
// var var1="Write Your Greetings";
// var var2="Good Morning";
// var result= prompt(var1, var2);

//Q6
// var x= prompt("Enter Your Favorite Color","Blue");
// alert("user response is"+" " + x);

//CHAPTER#10//

//Q1
// var city = "Karachi"
// if (city = "Karachi") { 
//     console.log("The City OF Lights") }

//Q2
// var x= 10;
// var y= +prompt("Enter Value Of y");
// if (x===y){
//     var z= +prompt("Enter Value Of z")
//     alert("user input is"+ " " + z);
// }

//Q3
// var zipCode = +prompt("Enter Your ZipCode");
// if ( zipCode==10010) {
//     alert("Karachi")
// }
// else{
//     alert("Please write correct city")
// }

//Q4
// ??

//CHAPTER#11//

//Q1
// var alpha1= "abc"
// var alpha2= "ABC"
// if (alpha1!==alpha2){
//     alert("they are not equal");
// }

//Q2
// var num1=17
// var num2=76
// if(num2>=num1){
//     alert("76 is greater than 17");
// }

//Q3
// var userAge= prompt("Enter Your Age")
// if (userAge!==0){
//     alert("!!!!!!")
// }


//Q4
// var number=55;
// if (number!==30){
//     alert("Congratulations")
// }

//Q5
// var firstName= prompt("Enter Your First Name");
// if(firstName!=="Yousuf"){
//     alert("No match!")
// }

////CHAPTER#12//

//Q1
// var age= prompt("Enter Your Age");
// if (age >= 30){
//     alert("You're Not Eligible")
// }
// else{
//  alert("You're Eligible")
// }

//Q2
// Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and  give you grade A/C to Your percentage. 
// var english =+prompt("Enter Your english Marks");
// var Computer =+prompt("Enter Your Computer Marks");
// var maths =+prompt("Enter Your maths Marks");
// var totalMarks= english+Computer+maths;
// var result= (totalMarks/300)*100;
// alert(result);
// if(result>=80){
//     alert("Congratulations for Aone grade");
// }
// if(result>=70){
//     alert("Congratulations for Agrade")
// }
// else if (result>=60){
//     alert("B grade")
// }
// else{
//     alert("You're Fail")
// }


//Q3
// var a= +prompt("Enter A Number")
// if (a === 10) {  
//      alert("a is 10"); 
//     } 
// else if (a!==10){
//     alert("The correct value of a is 15")
// }

//Q4
// var city= prompt("Enter Your City");
// if(city==="Karachi"){
//     alert("acknowledging it is Karachi")
// }
// else if (city==="Lahore"){
//     alert("acknowledging it's Lahore")
// }
// else{
//     alert("No Match!!")
// }


////CHAPTER13///
//Q1
// var a = +prompt("Enter Your Year Of Birth");
// var b = 2000;
// var c = +prompt ("Enter your age");
// var d = 23;
// if (a==b && c==d){
//     alert("You are 2000's Kid")
// };

//Q2
// var a = prompt("Enter Your country");
// var b = "Itlay";
// var c = prompt ("Enter your citizenship");
// var d = "Italian";
// if ( a==b || c!==d ) {
//     alert ("You Are Not eligible for Government Job")
// };

//Q3
// var applicantName = prompt("Enter your name");
// var name1= "Hamza";
// var name2= "Arsalan"
// var applicantAge = +prompt ("Enter Yor Age");

// if(applicantName==name1 || applicantName==name2 && age > 60) {
//     alert (" Welcome")
// }

//Q4
// var num1= 70
// var num2= 55
// if (num1<num2 || num1>num2) {
//     alert "num1 is greater than num2"
// };

//Q5
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt ("Enter Your last name");
// var name1= "Marium";
// var name2 = "Abidi";
// if ( firstName==name1 && lastName==name2 ){
//     alert (" Hello Marium Abidi")
// }else {
//     alert (" Enter correct Name ")
// }


//CHAPTER14///
//Q1
// var password= prompt("Password Please!");
// if (password.length!== 0){
//     if ( password.length <= 5) {
//         alert("Password Must Be Greater than 5")
//     }
//    else {alert ("Valid Password")
// } 
// } else {
//     alert("Invalid Password")
// }

//Q2
// var a= 1;
// var c= "Max";
// if (a === 1) {
//     if (c === "Max") {
//         alert("OK");
//     }
// }

//Q3
// var a = 1;
// var c = "Max";
// if (a === 1 && c === "Max") {
//     alert("OK");
// }

//Q4
// var p=22;
// var q=22;
// if (p==q){
//     if (p>=q){ 
//     }
//     alert(" p is equal to q")
// };


///CHAPTER#15//
//Q1
//  var countries =[];

//  //Q2
//  var students=["Ali"];

 //Q3
//  var alphabet = ["h","i","j","k"];
//  alert( alphabet[2]);

//Q4 
var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]; 
alert 
