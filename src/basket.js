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
    basketCapacity = 0;

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

    removeItem(itemToBeRemoved) {
        let indexNum = this.basketItems.indexOf(itemToBeRemoved);
        this.basketItems.splice(indexNum, 1)
    }

    isBasketFull(basketCapacity) {
        if (basketCapacity < this.basketItems.length) {
            console.log(true)
        };
        // console.log(`Basket is full: ${basketCapacity < this.basketItems.length}`);

    }

    increaseBasketCapacityTo(basketCapacity) {
        this.basketCapacity += basketCapacity;
    }






}

//const basket = new Basket();

module.exports = { Basket };
