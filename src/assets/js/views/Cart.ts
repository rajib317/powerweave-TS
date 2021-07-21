import { Common } from './Common.js';
import { Shoe, State } from '../model.js';

class Cart extends Common {
  _parentElement = document.querySelector('.cart')!;
  _data!: Shoe[];
  _generateMarkup() {
    return `Cart (${State.cart.length || '--'})`;
  }
}
export default new Cart();
