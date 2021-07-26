import * as model from './model.js';
import Showcase from './views/Showcase.js';
import RelatedList from './views/Related.js';
import Cart from './views/Cart.js';
const changePriceController = function (size, index) {
    try {
        Showcase.changePrice(index);
        model.setSize(size);
        Showcase.resetBtnText('Add to cart');
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
const changeShowcaseController = function (sku, size = 0) {
    const renderdata = model.findBySKU(sku);
    if (!renderdata)
        throw 'Product not found';
    Showcase.render(renderdata);
    if (size !== 0)
        Showcase.renderSize(size);
};
const addToCartController = function (cart, size) {
    try {
        if (!size)
            throw 'Please select a size first';
        const qty = model.addToCart(cart, size);
        Showcase.updateBtnText(qty);
        Cart.render(model.State.cart);
    }
    catch (err) {
        ErrorHandler(err);
    }
};
// == MiniCart== //
const changeQtyController = function (sku, changeBy) {
    const cartItem = model.findBySKU(sku, model.State.cart);
    model.changeQty(cartItem, changeBy);
    Cart.render(model.State.cart);
};
const removeFromCart = function (sku, size) {
    const cartItem = model.findBySKUnSize(sku, size, model.State.cart);
    model.delCart(cartItem);
    Cart.render(model.State.cart);
};
const ErrorHandler = function (err) {
    alert(err);
};
const init = function () {
    try {
        Showcase.render(model.State.currentShow);
        RelatedList.render(model.Related);
        Cart.render(model.State.cart);
        Showcase.addhandlerChangePrice(changePriceController);
        Showcase.addhandlerChangeImg(changeImgController);
        RelatedList.addhandlerChangeShowcase(changeShowcaseController);
        Showcase.addhandlerAddToCartController(addToCartController);
        Cart.addhandlerChangeShowcase(changeShowcaseController);
        Cart.addHandlerChangeQty(changeQtyController);
        Cart.addHandlerRemoveFromCart(removeFromCart);
    }
    catch (err) {
        alert(err);
    }
};
init();
