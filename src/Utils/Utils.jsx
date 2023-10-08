
const totalPrice = (products) =>{
    let sum = 0;

    for (let i = 0; i < products.length; i++) {
        const price = products[i].price;
        sum = sum + price;
    }
    return sum.toFixed(2);
}

export {totalPrice}