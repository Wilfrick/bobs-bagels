// As a Bob's Bagels manager, so that I can record more sales I’d like to create baskets with larger capacity when I need to.
const { Basket } = require("../src/Basket");
const assertEquals = (expected, actual) => expected === actual;


{
    // check that increasing basketCapacity increases the size of the array 
    console.log(``)
    console.log(`Test eight: increasing basketCapacity increases the size of the array`)
    console.log(`=====================================================================`)
    console.log(``)

    // create new basket instance
    const basket = new Basket();

    // arrange : basketCapacity; 
    basket.basketCapacity = 10;
    const higherCapacity = 20;

    // act : increaseBasketCapacityTo;
    // basket.basketCapacity = higherCapacity;
    basket.increaseBasketCapacityTo(higherCapacity);

    // assert / result : expected = actual ?
    let result = assertEquals(higherCapacity, basket.basketCapacity);

    console.log(`Test eight ${result ? `passed` : `failed`}`);
    console.log(`=====================================================================`)
    console.log(``)


}