const { Basket } = require("../src/Basket");
const assertEquals = (expected, actual) => expected === actual;

{
    // As a member of the public, so I can order a bagel when I want to, I'd like to add an item to my basket
    // check that adding an item to an empty basket increases the length of the array

    console.log(``)
    console.log(`Test one: add item to empty basket increases length of array`)
    console.log(`============================================================`)
    console.log(``)

    // arrange
    const basket = new Basket();
    let itemToBeAdded = { id: 1 };



    // act
    basket.addItem(itemToBeAdded);

    // set up values to compare
    let expectedLength = 1;
    let actualLength = basket.basketItems.length;

    // assert
    let successIndicator = assertEquals(expectedLength, actualLength);

    // report
    let message = successIndicator ? `Test one passed` : `Test one failed`;

    console.log(message);

    // cleanup
    basket.basketItems = [];
}

{
    const basket = new Basket();
    let input = { id: `bagel` };
    // Test 2  : Check that item added to basket is actually the item added

    console.log(``)
    console.log(`Test two: check item added to basket is correct item`)
    console.log(`============================================================`)
    console.log(``)

    let expected = input;

    // act
    basket.addItem(input);

    // assert
    let actual = basket.basketItems[0];
    let successIndicator = assertEquals(actual, expected);

    // report
    let message = successIndicator ? `Test two passed` : `Test two failed`;

    console.log(message);

}
{
    // test 3: An item without an id property is not added to the basket

    console.log(``)
    console.log(`Test three: item without id is not added to basket`)
    console.log(`============================================================`)
    console.log(``)

    const basket = new Basket();

    // arrange
    let inputItem = {
        seeds: false,
        name: "delicious bagel"
    };
    basket.basketItems = []; // reset the basket

    // act
    basket.addItem(inputItem);

    // assert
    let expectedLength = 0;
    let actualLength = basket.basketItems.length;

    let resultIndicator = assertEquals(expectedLength, actualLength);
    let message = resultIndicator ? `Test three passed` : `Test three failed`;
    console.log(message);

    // clean up
    basket.basketItems = [];

}
{
    // test 4: An item can be added to a basket containing existing items

    console.log(``)
    console.log(`Test four: item can be added to a basket containing existing items`)
    console.log(`==================================================================`)
    console.log(``)

    const basket = new Basket();

    basket.basketItems = [{ id: 'bagel1' }]
    let inputItem = { id: 'bagel2' }

    // act
    basket.addItem(inputItem);

    // assert
    let expectedLength = 2;
    let actualLength = basket.basketItems.length;
    let resultIndicator = assertEquals(actualLength, expectedLength);
    let message = resultIndicator ? `Test four passed` : `Test four failed`
    console.log(message);

}