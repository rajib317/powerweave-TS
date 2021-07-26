import { Common } from './Common.js';
import { Shoe } from '../model.d';
import { State } from '../model.js';

class CartClass extends Common {
  _parentElement = document.querySelector('.cart-container')!;
  _data!: Shoe[];
  addhandlerChangeShowcase(handler: (sku: number, size: number) => void) {
    this._parentElement.addEventListener('click', function (e) {
      const target = <HTMLElement>e.target!;
      const cartItemEL = <HTMLElement>target.closest('.mini-cart--item');
      if (!cartItemEL) return;
      const cartItem = cartItemEL.dataset['sku']!;
      const size = cartItemEL.dataset['size']!;
      handler(+cartItem, +size);

      // const cartItem = <Shoe>this.dataset['item'];
      // handler(cartItem);
    });
  }
  _generateMarkup() {
    const cartNum = State.cart.length;
    let cartItems = '';
    if (cartNum !== 0) cartItems = this._generateCartItems(State.cart);
    return `
        <div class="cart">Cart (${cartNum || '--'})</div>
        <div class="mini-cart">
          ${cartItems}
        </div>
    `;
  }
  test(handler: () => void) {
    handler();
  }
  test1() {
    console.log('erer');
  }
  _generateCartItems(items: Shoe[]) {
    let total = 0;
    return (
      items
        .map(item => {
          total += item.data.price * item.c_qty;
          return `<div class="mini-cart--item" data-sku="${item.data.sku}" data-size="${item.c_size}" >
          <div class="thumb">
            <img src="${item.data.image[0].thumb}" alt="" />
          </div>
          <div class="name">${item.data.name}<br /><span class="text-xm">Size: ${item.c_size}</span></div>
          <div class="qty-container">
            <div class="qty">${item.c_qty}</div>
            <div class="qty-btns">
              <button class="qty-up btn btn--primary-alt btn--xm">+</button>
              <button class="qty-down btn btn--primary-alt btn--xm">-</button>
            </div>
          </div>
          <div class="price">$${item.data.price}</div>
          <div class="del">
            <button class="btn btn--primary-alt btn--xm del--btn">
              &empty;
            </button>
          </div>
        </div>`;
        })
        .join('') +
      `<div class="total text-bold">
       Total: $ ${total.toFixed(2)}
       </div>`
    );
  }
}
export default new CartClass();
