const basket = {
    basketItems: [],
    addItem: function (input) {
        if (input?.id) {
            this.basketItems.push(input);
        }
    },
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    removeItem: function (input) {
        let indexNum = this.basketItems.indexOf(input);
        this.basketItems.splice(indexNum, 1)

    }


};




module.exports = { basket };