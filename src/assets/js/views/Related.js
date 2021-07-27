import { SHUFFLE_MODE } from '../config.js';
import { Common } from './Common.js';
class Related extends Common {
    constructor() {
        super(...arguments);
        this._parentElement = document.querySelector('.product-list--content');
    }
    addhandlerChangeShowcase(handler) {
        this._parentElement.addEventListener('click', e => {
            if (!e.target)
                return;
            const target = e.target;
            if (!target.closest('button'))
                return;
            const prodListEl = target.closest('.product-list--item');
            if (!prodListEl || !prodListEl.dataset.sku)
                return;
            const { sku } = prodListEl.dataset;
            handler(+sku);
            const scrollTo = ['header', 'nav'].reduce((total, El) => {
                const a = document.querySelector(El);
                total += a.offsetHeight;
                return total;
            }, 0);
            window.scrollTo(0, scrollTo);
        });
    }
    //Making a shallow copy as we're mutilating items[] when SHUFFLE_MODE = true
    _generateMarkup(items = Array.from(this._data)) {
        let itemsCopy = items;
        if (SHUFFLE_MODE) {
            itemsCopy = [];
            while (items.length !== 0) {
                const randomIndex = Math.floor(Math.random() * items.length);
                itemsCopy.push(items[randomIndex]);
                items.splice(randomIndex, 1);
            }
        }
        return itemsCopy
            .map(item => `<div class="product-list--item" data-sku="${item.data.sku}">
    <div class="img-container"><img src="${item.data.image[0].thumb}" alt="" /></div>
    <div class="title">${item.data.name.substring(0, 40)}</div>
    <div class="price">$${item.data.price}</div>
    <div class="overlay">
      <button class="btn-fluid btn--md btn--primary">Buy Now</button>
    </div>
  </div>`)
            .join('');
    }
}
export default new Related();
