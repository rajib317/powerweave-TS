import { Common } from './Common.js';
import { State } from '../model.js';
class CartClass extends Common {
    constructor() {
        super(...arguments);
        this._parentElement = document.querySelector('.cart-container');
    }
    addhandlerChangeShowcase(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const target = e.target;
            const cartItemEL = target.closest('.mini-cart--item');
            if (!cartItemEL)
                return;
            if (target.closest('.qty-down'))
                return;
            if (target.closest('.qty-up'))
                return;
            const cartItem = cartItemEL.dataset['sku'];
            const size = cartItemEL.dataset['size'];
            handler(+cartItem, +size);
        });
    }
    addHandlerChangeQty(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const target = e.target;
            const cartItemEL = target.classList.contains('btn');
            if (!cartItemEL)
                return;
            const skuEl = target.closest('.mini-cart--item');
            const { sku } = skuEl.dataset;
            const { by } = target.dataset;
            if (!sku || !by)
                return;
            handler(+sku, +by);
        });
    }
    addHandlerRemoveFromCart(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const target = e.target;
            const delBtn = target.classList.contains('del--btn');
            if (!delBtn)
                return;
            const skuEl = target.closest('.mini-cart--item');
            const { sku, size } = skuEl.dataset;
            if (!sku || !size)
                return;
            handler(+sku, +size);
        });
    }
    _generateMarkup() {
        const cartNum = State.cart.length;
        let cartItems = '';
        if (cartNum !== 0)
            cartItems = this._generateCartItems(State.cart);
        return `
        <div class="cart">Cart (${cartNum || '--'})</div>
        <div class="mini-cart">
          ${cartItems}
        </div>
    `;
    }
    _generateCartItems(items) {
        let total = 0;
        return (items
            .map(item => {
            total += item.data.price * item.c_qty;
            const { c_qty } = item;
            console.log(c_qty);
            return `<div class="mini-cart--item" data-sku="${item.data.sku}" data-size="${item.c_size}" >
          <div class="thumb">
            <img src="${item.data.image[0].thumb}" alt="" />
          </div>
          <div class="name">${item.data.name}<br /><span class="text-xm">Size: ${item.c_size}</span></div>
          <div class="qty-container">
            <div class="qty">${c_qty}</div>
            <div class="qty-btns">
              <button data-by="1" class="qty-up btn btn--primary-alt btn--xm">+</button>
              <button data-by="-1" ${c_qty <= 1 ? 'disabled' : ''} class="qty-down btn btn--primary-alt btn--xm">-</button>
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
       </div>`);
    }
}
export default new CartClass();
