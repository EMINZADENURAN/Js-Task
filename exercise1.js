//let x = prompt("Enter x");
//let y = prompt("Enter y");
//let z = (x * y) / 100;
//alert(z);

//let x = prompt("Enter you value");
//x=Number(x)
//let y = 20;
//let z = (x * y) / 100;
//alert(z);
//console.log(400 + "2000");

let money = prompt("Enter the amount of money")
money = Number(money)
let tip = prompt("Enter the tip percentage")
tip = Number(tip)
let total = money + (money * tip / 100)
alert(`The total amount you need to pay is ${total}`)
