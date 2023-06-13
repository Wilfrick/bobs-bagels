// As a Bob's Bagels manager, so that I can record more sales I’d like to create baskets with larger capacity when I need to.
const { Basket } = require("../src/Basket");
const assertEquals = (expected, actual) => expected === actual;


{
    // check that input increases basketCapacity  
    console.log(``)
    console.log(`Test eight: check that input increases basketCapacity`)
    console.log(`=====================================================================`)
    console.log(``)

    // create new basket instance
    const basket = new Basket();

    // arrange : basketCapacity; 
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