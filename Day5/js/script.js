console.log("Conditions");

console.log("When if is True");

if (10 > 2) {
    console.log("10 is greater");
} else {
    console.log("2 is greater");
}


console.log("When if is False");

if (10 < 2) {
    console.log("10 is greater");
} else {
    console.log("2 is greater");
}

console.log("Question");
var price = 23000;
var quantity = 12;
var amount = price * quantity;
console.log("amount = " + amount);
if (amount >= 1000 || quantity >= 5) {
    console.log("Your total amount is above 1000 , Therefore you'll get 10% discount");
    var discount = (10 / 100) * amount;
    console.log("amount of 10 % discount " + discount);
    var final = amount - discount;
    console.log("Final amount after 10 % discount = " + final);

}else{
    console.log("Not enough amount to get 10% discount");
    console.log("Total amount = "+amount);
}

var per = 78;
var grade = "";
if(per>=90){
    grade = "A";
}else if(per>=80){
    grade = "B";
}else if(per>=70){
    grade = "C";
}else if(per>=60){
    grade = "D";
}else if(per>=50){
    grade = "E";
}else{
    grade = "F"
}

console.log(grade);


var f = "admin";
if(!(isNaN(f))){
    console.log(f);
}
if(isNaN(f)){
    console.log(f);
}

var mobile = 9814227620;
if(isNaN(mobile)){
    console.log(mobile)
}
if(!(isNaN(mobile))){
    console.log(mobile)
}

var n1 = 10;
var n2 = 20;

var max = (n1>n2)?n1:n2;
console.log(max);

var x = 1;
while(x<=5){
    console.log("x = "+x)
    x++;
}

var x = 5;
while(x>=1){
    console.log("x ="+x )
    x--;
}