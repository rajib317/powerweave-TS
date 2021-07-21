export class Common {
    constructor() {
        this._parentElement = document.body;
    }
    render(data) {
        this._data = data;
        this._clear();
        this._parentElement.insertAdjacentHTML('beforeend', this._generateMarkup());
    }
    _generateMarkup() {
        throw new Error('Method not implemented.');
    }
    _clear(parentElement = this._parentElement) {
        parentElement.innerHTML = '';
    }
    addhandlerAddToCartController(handler) {
        this._parentElement.addEventListener('click', function (e) {
            if (!e.target)
                return;
            const a = e.target;
            const target = a.closest('button');
            if (!target)
                return;
            const prodListEl = target.closest('[data-sku]');
            if (!prodListEl)
                return;
            if (!prodListEl.dataset.sku)
                throw 'Data Sku not set.';
            handler(+prodListEl.dataset.sku);
            target.textContent = 'Added+';
            target.disabled = true;
        });
    }
}
