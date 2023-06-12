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

    // clean up 

}

{
    // Test that the item that is removed from the basket is the item passed through removeItem
    console.log(`Test six: item that is removed from the basket is the item passed through removeItem`)

    const basket = new Basket();

    // Arrange
    // item
    basket.basketItems = { id: `Bagel 6` };

    // Act
    // remove an item
    basket.removeItem()

    // array does not contain item 


    // Result
    result = // check that item has been removed 
        console.log(`Test six: ${result ? `This test passed` : `This test failed`}`)
}
