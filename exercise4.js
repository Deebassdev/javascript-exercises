let character = "A";

if (character >= "A" && character <= "Z") {
  console.log("Uppercase letter");
} else if (character >= "a" && character <= "z") {
  console.log("Lowercase letter");
} else {
  console.log("Neither uppercase nor lowercase");
}



let age = 25;

let hasLicense = true;

if (age >= 18 && hasLicense == true) {
  console.log("They can drive");
} else {
  console.log("They cannot drive");
}




let totalAmount = 1000;

let isMember = true;

let finalAmount;

if (isMember) {
  finalAmount = totalAmount - (totalAmount * 0.20); // 20% discount
} else {
  finalAmount = totalAmount - (totalAmount * 0.05); // 5% discount
}

console.log("Final Amount:", finalAmount);






let number = 15;



let hour = 14; // 24-hour format

if (hour >= 5 && hour <= 11) {
  console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good afternoon");
} else if (hour >= 18 && hour <= 21) {
  console.log("Good evening");
} else {
  console.log("Good night");
}
