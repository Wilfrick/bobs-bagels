// As a member of the public, so that I can change my order I'd like to remove an item from my basket

const { basket, Basket } = require('../src/Basket.js');
const assertEquals = (expected, actual) => expected === actual;

{
    // check that the basket length has decreased by one

    const basket = new Basket();

    // arrange

    const input = { id: `bagel1` }
    basket.addItem({ id: `bagel2` })
    const initialLength = basket.basketItems.length

    // act
    basket.removeItem(input)


    // assert
    const decreasedLength = basket.basketItems.length
    const expectedLength = initialLength - 1;

    // result
    result = assertEquals(decreasedLength, expectedLength)
    console.log(`Test five: ${result ? `This test passed` : `This test failed`}`)
}

