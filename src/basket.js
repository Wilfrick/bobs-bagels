// const basket = {
//     basketItems: [],
//     addItem: function (input) {
//         if (input?.id) {
//             this.basketItems.push(input);
//         }
//     },
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//     removeItem: function (input) {
//         let indexNum = this.basketItems.indexOf(input);
//         this.basketItems.splice(indexNum, 1)

//     }


// };




class Basket {

    basketItems = [];

    constructor() {

    }

    // addItem(itemToBeAdded) {
    //     this.basketItems.push(itemToBeAdded);
    // }

    addItem(itemToBeAdded) {
        if (itemToBeAdded?.id) {
            this.basketItems.push(itemToBeAdded);
        }
    }

    removeItem() {

    }


}

//const basket = new Basket();

module.exports = { Basket };
