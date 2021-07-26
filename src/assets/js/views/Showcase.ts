import { Shoe } from '../model.d';
import { State } from '../model.js';
import { Common } from './Common.js';
import { PRICE_INCRESE_BY } from '../config.js';
class Showcase extends Common {
  _parentElement = document.querySelector('.product-showcase')!;
  _data!: Shoe;

  addhandlerChangePrice(handler: (size: number, index: number) => void) {
    const parentEl = this._parentElement;
    parentEl.addEventListener('click', function (e) {
      const target = <HTMLElement>e.target;
      if (!target) return;
      if (!target.closest('.size-item')) return;
      if (!target.dataset['index'] || !target.textContent)
        throw 'target index or content not defined.';
      handler(+target.textContent, +target.dataset['index']);
      parentEl.querySelectorAll('.size-item').forEach(liEl => {
        liEl.classList.remove('active');
      });
      target.classList.add('active');
    });
  }
  addhandlerChangeImg(handler: (a: string) => void) {
    this._parentElement.addEventListener('click', function (e) {
      const target = <HTMLImageElement>e.target;
      if (!target) return;
      if (!target.closest('.thumb')) return;
      if (!target.dataset['main']) throw 'data-main attribute not set.';
      handler(target.dataset['main']);
    });
  }
  changePrice(size: number, index: number) {
    if (size % 1 !== 0) throw 'Size is not an integer.';
    const { basePrice } = State.currentShow.data;
    State.currentShow.data.price = basePrice + index * PRICE_INCRESE_BY;
    const PriceEl = this._parentElement.querySelector('.price span')!;
    PriceEl.textContent = `${State.currentShow.data.price}`;
  }

  changeMainImg(src: string) {
    const img = <HTMLImageElement>(
      this._parentElement.querySelector('.product-showcase--product-image img')
    );
    if (!img) throw 'main image selector not found.';
    img.src = src;
  }

  _setSKU(parentEl = <HTMLElement>this._parentElement, showcase = this._data) {
    parentEl.dataset.sku = `${showcase.data.sku}`;
  }

  renderSize(size: number) {
    this._parentElement.querySelectorAll('.size-item').forEach(El => {
      if (Number(El.textContent) === size) {
        El.classList.add('active');
      }
    });
  }

  getSizeSelected() {
    const sizeEl = this._parentElement.querySelectorAll('.size-item')!;
    return (
      Number(
        Array.from(sizeEl).find(liEl => liEl.classList.contains('active'))
          ?.textContent
      ) ?? false
    );
  }

  addhandlerAddToCartController(
    handler: (cart: any, size: number | false) => void
  ) {
    const thisObj = this;
    this._parentElement.addEventListener('click', function (e) {
      if (!e.target) return;
      const a = <HTMLElement>e.target;
      const target = <HTMLButtonElement>a.closest('.add-to-cart');
      if (!target) return;

      const skuEl = <HTMLElement>target.closest('[data-sku]');
      if (!skuEl) return;
      const sku = skuEl.dataset.sku;
      if (!sku) throw 'Data Sku not set.';

      handler(thisObj._data, thisObj.getSizeSelected());
      // target.disabled = true;
    });
  }

  resetBtnText(text: string = 'Add to cart') {
    const btnCart: HTMLButtonElement = document.querySelector('.add-to-cart')!;
    if (text) return (btnCart.textContent = `${text}`);
  }

  updateBtnText(qty: number) {
    const btnCart: HTMLButtonElement = document.querySelector('.add-to-cart')!;
    btnCart.textContent = `Added(${qty})`;
  }

  _getSize(item: any) {
    return item.sizes[0];
  }

  _generateMarkup(showcase = this._data) {
    this._setSKU();
    return `
    <section class="product-showcase--thumbs-container">
    ${showcase.data.image
      .map(
        img =>
          `<img data-main="${img.main}" class="thumb" src="${img.thumb}" alt="" />`
      )
      .join('')}      
    </section>
    <section class="product-showcase--product-image">
      <img src="${showcase.data.image[0].main}" alt="" />
    </section>
    <section class="product-info">
      <h1 class="product-info--title">${showcase.data.name}</h1>
      <div class="product-info--sku">#${showcase.data.sku}</div>
      <div class="product-info--desc">
        <p>
          ${showcase.data.details}
        </p>
      </div>
      <div class="product-info--options">
        <div class="product-info--options--label">Slelect Label</div>
        <ul class="size-options">
          ${showcase.data.sizes
            .map(
              (size, index) =>
                `<li class="size-item" data-index="${index}">${size}</li>`
            )
            .join('')}
        </ul>
      </div>
      <div class="product-info--purchase">
        <div class="price">$ <span>${showcase.data.price}</span></div>
        <div class="btn-container">
          <button class="btn btn--primary">Buy Now</button>
          <button class="btn btn--primary add-to-cart">Add to Cart</button>
        </div>
      </div>
    </section>
  `;
  }
}

export default new Showcase();
