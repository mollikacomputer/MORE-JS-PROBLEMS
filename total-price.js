const cart = [
    {name:"laptop", price: 35000, quantity:1 },
    {name:"phone", price: 15000, quantity:2 },
    {name:"shirt", price: 530, quantity:3 } 
]

let totalPrice = 0;
for(let product of cart){
    let productPrice = product.price * product.quantity;
    totalPrice = totalPrice + productPrice;
}
console.log(totalPrice);

/* 
const products= [
    {name:"laptop", price: 35000, quantity: 2},
    {name:"phone", price: 15000, quantity: 3},
    {name:"shirt", price: 530, quantity: 1 } 
]
 */
/* function getProductPrice(){
    let totalPrice = 0;
    for(let product of products){
        productPrice = product.price * product.quantity;
        totalPrice = totalPrice + productPrice;
        
    }return totalPrice;

}
 
let firstShoping = getProductPrice();
console.log(firstShoping);
*/
// const products = [
//     {name: "Laptop", price: 25000, quantity: 1},
//     {name: "Mobile", price: 12000, quantity: 2},
//     {name: "Shirt", price: 1200, quantity: 3}
// ]

// function getProductPrice(){
//     let totalPrice = 0;
//     for(let product of products){
//         let productTotalPrice = product.price * product.quantity;
//         totalPrice = totalPrice + productTotalPrice;
//     }return totalPrice;
// }
// let firstShoping = getProductPrice();
// console.log(firstShoping);

