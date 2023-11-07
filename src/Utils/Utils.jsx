const totalPrice = (products) =>{
    let sum = 0;

    for (let i = 0; i < products.length; i++) {
        const price = products[i].price;
        sum = sum + price;
    }
    return sum.toFixed(2);
}

const formToString = (direction) =>{

    const floor = direction.aditional ? ` ${direction.aditional},` : '';

    const directionOnString = `Calle ${direction.street} ${direction.number},${floor} ${direction.city}, ${direction.zipcode}`

    return directionOnString
}

export {totalPrice, formToString}