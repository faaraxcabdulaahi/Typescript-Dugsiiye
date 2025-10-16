let productName: string;
productName = "laptop";
// productName = 23; 
console.log(productName);

let productPrice: number;
productPrice = 23;
// productPrice = "23"; 
console.log(productPrice);

let discountAvailable: boolean;
discountAvailable = true;
// discountAvailable = "true"; 
console.log(discountAvailable);

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(11, 0.22));


function printLength(x: any) {
  console.log(x.length);
}

printLength("Hello Programmers"); 
printLength(123456789);     


