var productName;
productName = "laptop";
// productName = 23; 
console.log(productName);
var productPrice;
productPrice = 23;
// productPrice = "23"; 
console.log(productPrice);
var discountAvailable;
discountAvailable = true;
// discountAvailable = "true"; 
console.log(discountAvailable);
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(getDiscount(11, 0.22));
function printLength(x) {
    console.log(x.length);
}
printLength("Hello Programmers");
printLength(123456789);
