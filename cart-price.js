let cart = [
    {name:"laptop", price: 25000, quantity: 1},
    {name:"phone", price: 15000, quantity: 2},
    {name:"shirt", price: 5500, quantity: 5 }
]

let cartTotalPrice = 0;

for(let product of cart){
    let productPrice = product.price * product.quantity;
    cartTotalPrice = productPrice + cartTotalPrice;
}
console.log(cartTotalPrice);