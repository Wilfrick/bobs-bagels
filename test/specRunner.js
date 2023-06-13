console.log(`Running all tests....`)

require(`../src/Basket.js`);
require(`./basket_addItem.spec.js`);
require(`./basket_removeItem.spec.js`);
require(`./basket_capacity.spec.js`);
require(`./basket_increaseCapacity.spec.js`);
require(`./basket_itemExists.spec.js`);