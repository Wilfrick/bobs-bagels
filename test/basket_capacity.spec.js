// As a member of the public, so that I can not overfill my small bagel basket I'd 
// like to know when my basket is full when I try adding an item beyond my basket 
// capacity.

const { Basket } = require('../src/Basket.js');
const assertEquals = (expected, actual) => expected === actual;

{
    console.log(``)
    console.log(`Test seven: Basket full returns a boolean`)
    console.log(`=========================================`)
    console.log(``)

    // create new basket instance
    const basket = new Basket();

    // arrange : addItem, basketCapacity; 
    capacity = basket.basketCapacity = 0;
    basket.addItem({ id: `overflow bagel` })

    // act : isBasketFull;
    basket.isBasketFull(capacity);
    const expected = true;

    // assert / result : expected = actual ?
    // isBasketFull = true .:
    result = assertEquals(expected, (basket.basketCapacity < basket.basketItems.length));

    // result = (basket.basketCapacity < basket.basketItems.length);

    console.log(`Test seven ${result ? `passed` : `failed`}`);
    console.log(`=========================================`)
    console.log(``)

}