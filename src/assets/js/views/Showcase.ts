import { Shoe, State } from '../model.js';
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
    const { basePrice } = State.currentShow;
    State.currentShow.price = basePrice + index * PRICE_INCRESE_BY;
    const PriceEl = this._parentElement.querySelector('.price span')!;
    PriceEl.textContent = `${State.currentShow.price}`;
  }

  changeMainImg(src: string) {
    const img = <HTMLImageElement>(
      this._parentElement.querySelector('.product-showcase--product-image img')
    );
    if (!img) throw 'main image selector not found.';
    img.src = src;
  }

  _generateMarkup(showcase = this._data) {
    return `<main class="product-showcase" data-sku="${showcase.sku}">
    <section class="product-showcase--thumbs-container">
    ${showcase.image
      .map(
        img =>
          `<img data-main="${img.main}" class="thumb" src="${img.thumb}" alt="" />`
      )
      .join('')}      
    </section>
    <section class="product-showcase--product-image">
      <img src="${showcase.image[0].main}" alt="" />
    </section>
    <section class="product-info">
      <h1 class="product-info--title">${showcase.name}</h1>
      <div class="product-info--sku">#${showcase.sku}</div>
      <div class="product-info--desc">
        <p>
          ${showcase.details}
        </p>
      </div>
      <div class="product-info--options">
        <div class="product-info--options--label">Slelect Label</div>
        <ul class="size-options">
          ${showcase.sizes
            .map(
              (size, index) =>
                `<li class="size-item" data-index="${index}">${size}</li>`
            )
            .join('')}
        </ul>
      </div>
      <div class="product-info--purchase">
        <div class="price">$ <span>${showcase.price}</span></div>
        <div class="btn-container">
          <button class="btn btn--primary">Buy Now</button>
          <button class="btn btn--primary">Add to Cart</button>
        </div>
      </div>
    </section>
  </main>`;
  }
}

export default new Showcase();
