import { SHUFFLE_MODE } from '../config.js';
import { Shoe } from '../model.d';
import { Common } from './Common.js';
class Related extends Common {
  _parentElement = document.querySelector('.product-list--content')!;
  _data!: Shoe[];
  addhandlerChangeShowcase(handler: (item: number) => void) {
    this._parentElement.addEventListener('click', e => {
      if (!e.target) return;
      const target = <HTMLElement>e.target;
      if (!target.closest('button')) return;
      const prodListEl = <HTMLElement>target.closest('.product-list--item');
      if (!prodListEl) return;
      if (!prodListEl.dataset.sku) throw 'Data Sku not set.';
      handler(+prodListEl.dataset.sku);
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
      .map(
        item => `<div class="product-list--item" data-sku="${item.data.sku}">
    <img src="${item.data.image[0].thumb}" alt="" />
    <div class="title">${item.data.name}</div>
    <div class="price">$${item.data.price}</div>
    <div class="overlay">
      <button class="btn-fluid btn--md btn--primary">Buy Now</button>
    </div>
  </div>`
      )
      .join('');
  }
}
export default new Related();
