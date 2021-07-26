import * as model from './model.js';
import Showcase from './views/Showcase.js';
import RelatedList from './views/Related.js';
import Cart from './views/Cart.js';
import { Shoe } from './model.d';

const changePriceController = function (size: number, index: number) {
  try {
    Showcase.changePrice(size, index);
    model.setSize(size);
    Showcase.resetBtnText('Add to cart');
  } catch (err) {
    ErrorHandler(err);
  }
};

const changeImgController = function (src: string) {
  try {
    Showcase.changeMainImg(src);
  } catch (err) {
    ErrorHandler(err);
  }
};
const changeShowcaseController = function (sku: number, size: number = 0) {
  model.State.currentShow =
    model.Related.find(shoe => shoe.data.sku === sku) ||
    model.State.currentShow;
  Showcase.render(model.State.currentShow);
  const scrollTo = ['header', 'nav'].reduce((total, El) => {
    const a = <HTMLElement>document.querySelector(El)!;
    total += a.offsetHeight;
    return total;
  }, 0);
  window.scrollTo(0, scrollTo);
};

const addToCartController = function (cart: Shoe, size: number | false) {
  try {
    if (!size) throw 'Please select a size first';
    const qty = model.addToCart(cart, size);
    Showcase.updateBtnText(qty);
    Cart.render(model.State.cart);
  } catch (err) {
    ErrorHandler(err);
  }
};

const ErrorHandler = function (err: any) {
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
  } catch (err) {
    alert(err);
  }
};
init();
