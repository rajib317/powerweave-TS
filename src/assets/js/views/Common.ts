import { Shoe } from '../model';
import Related from './Related';
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

  addhandlerAddToCartController(handler: (sku: number) => void) {
    this._parentElement.addEventListener('click', function (e) {
      if (!e.target) return;
      const a = <HTMLElement>e.target;
      const target = a.closest('button');
      if (!target) return;

      const prodListEl = <HTMLElement>target.closest('[data-sku]');
      if (!prodListEl) return;
      if (!prodListEl.dataset.sku) throw 'Data Sku not set.';
      handler(+prodListEl.dataset.sku);
      target.textContent = 'Added+';
      target.disabled = true;
    });
  }
}
