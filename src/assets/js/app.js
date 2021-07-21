import { State, Related } from './model.js';
import Showcase from './views/Showcase.js';
import RelatedList from './views/Related.js';
import Cart from './views/Cart.js';
const changePriceController = function (size, index) {
    try {
        Showcase.changePrice(size, index);
    }
    catch (err) {
        ErrorHandler(err);
    }
};
const changeImgController = function (src) {
    try {
        Showcase.changeMainImg(src);
    }
    catch (err) {
        ErrorHandler(err);
    }
};
const changeShowcaseController = function (sku) {
    State.currentShow =
        Related.find(shoe => shoe.sku === sku) || State.currentShow;
    Showcase.render(State.currentShow);
};
const addToCartController = function (sku) {
    try {
        const newCartItem = Related.find(shoe => shoe.sku === sku);
        if (!newCartItem)
            throw 'Product Undefined.';
        State.cart.push(newCartItem);
        Cart.render(State.cart);
    }
    catch (err) {
        ErrorHandler(err);
    }
};
const ErrorHandler = function (err) {
    alert(err);
};
const init = function () {
    try {
        Showcase.render(State.currentShow);
        RelatedList.render(Related);
        Cart.render(State.cart);
        Showcase.addhandlerChangePrice(changePriceController);
        Showcase.addhandlerChangeImg(changeImgController);
        RelatedList.addhandlerChangeShowcase(changeShowcaseController);
        RelatedList.addhandlerAddToCartController(addToCartController);
        Showcase.addhandlerAddToCartController(addToCartController);
    }
    catch (err) {
        alert(err);
    }
};
init();
