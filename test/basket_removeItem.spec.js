// As a member of the public, so that I can change my order I'd like to remove an item from my basket

const { basket } = require('../src/basket.js');
const assertEquals = (expected, actual) => expected === actual;

// check that the basket length has decreased by one

// arrange

input = { id: `bagel1` }
initialLength = basket.basketItems.length

// act
basket.removeItem(input)


// assert
decreasedLength = basket.basketItems.length
expectedLength = initialLength - 1;

// result
result = assertEquals(decreasedLength, expectedLength)
console.log(`Result: ${result ? `This test passed` : `This test failed`}`)

