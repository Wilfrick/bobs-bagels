const { basket, Basket } = require('../src/Basket.js');
const assertEquals = (expected, actual) => expected === actual;
// add test assertion file 

/*
As a member of the public
so that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.
*/

{
    const basket = new Basket();

    // test: item exists returns a boolean
    // if item does not exist, itemExists returns false
    console.log(``)
    console.log(`Test nine: itemExists returns a boolean`)
    console.log(`==================================================================`)
    console.log(``)

    // arrange: 
    // item =
    // expected = itemExists = false
    const itemCheck = { id: `mysteryItem` };
    const expected = true;

    // act:
    // remove item
    basket.removeItem(itemCheck);

    // assert:
    // result = assert ( expected, doesitemexist bool)
    result = assertEquals(expected, basket.itemExists())
    console.log(`Test nine ${result ? `passed` : `failed`}`)





}