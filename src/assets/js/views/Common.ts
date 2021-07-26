import { Shoe } from '../model.d';
export class Common {
  _parentElement: Element = document.body;
  _data!: Shoe | Shoe[];

  render(data: Shoe | Shoe[]) {
    this._data = data;
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', this._generateMarkup());
  }
  public _generateMarkup(): string {
    throw new Error('Method not implemented.');
  }
  _clear(parentElement = this._parentElement) {
    parentElement.innerHTML = '';
  }

  // addhandlerAddToCartController(handler: (sku: number, size: number) => void) {
  //   const thisObj = this;
  //   this._parentElement.addEventListener('click', function (e) {
  //     if (!e.target) return;
  //     const a = <HTMLElement>e.target;
  //     const target = <HTMLButtonElement>a.closest('.add-to-cart');
  //     if (!target) return;

  //     const skuEl = <HTMLElement>target.closest('[data-sku]');
  //     if (!skuEl) return;
  //     const sku = skuEl.dataset.sku;
  //     if (!sku) throw 'Data Sku not set.';
  //     handler(+sku, thisObj._getSize(+sku));
  //     const qty = State.cart.find(item => item.sku === +sku)?.c_qty ?? 1;
  //     target.textContent = `Added(${qty})`;
  //     // target.disabled = true;
  //   });
  // }
}
