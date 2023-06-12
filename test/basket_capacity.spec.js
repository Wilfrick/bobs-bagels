// As a member of the public, so that I can not overfill my small bagel basket I'd 
// like to know when my basket is full when I try adding an item beyond my basket 
// capacity.

const { Basket } = require('../src/Basket.js');

{
    console.log(``)
    console.log(`Test seven: Basket full returns a boolean`)
    console.log(`=========================================`)
    console.log(``)

    // create new basket instance
    const basket = new Basket();

    // arrange : addItem, basketCapacity; 
    const basketCapacity = 0;
    basket.addItem({ id: `overflow bagel` })

    // act : isBasketFull;
    basket.isBasketFull(basketCapacity);



    // assert / result : expected = actual ?
    // isBasketFull = true .:
    result = (basketCapacity > basket.basketItems.length);

    console.log(`Test seven: ${result ? `passed` : `failed`}`);
    console.log(`=========================================`)
    console.log(``)



}