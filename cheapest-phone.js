const phones = [
    {name: 'Nokia', model: 'N95', storage: 95, memory: 5, price: 9000 },
    {name: 'Samsung', model: 'm33', storage: 120, memory: 64, price: 75000 },
    {name: 'Walton', model: 'Dd25', storage: 220, memory: 32, price: 50000 },
    {name: 'Saome', model: 'qvV92', storage: 512, memory: 8, price: 2500 },
    {name: 'Symphone', model: 'Tlb95', storage: 1000, memory: 12, price: 12000 }
]
    let cheapest = phones[0]
for(let phone of phones ){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);
