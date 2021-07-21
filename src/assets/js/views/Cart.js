import { Common } from './Common.js';
import { State } from '../model.js';
class Cart extends Common {
    constructor() {
        super(...arguments);
        this._parentElement = document.querySelector('.cart');
    }
    _generateMarkup() {
        return `Cart (${State.cart.length || '--'})`;
    }
}
export default new Cart();
