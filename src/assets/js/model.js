export const State = {
    currentShow: {
        data: {
            sku: 1234,
            name: 'Lorem Ipsum Shoes',
            details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iusto
    incidunt totam officia, nulla voluptate culpa voluptates delectus!
    Error, sint. Vel culpa sequi ipsa temporibus repudiandae rerum pariatur
    praesentium similique?`,
            sizes: [6, 7, 8, 9, 10, 11],
            price: 999.99,
            basePrice: 999.99,
            image: [
                {
                    main: 'src/assets/img/1.jpg',
                    thumb: 'src/assets/img/thumb1.png',
                },
                {
                    main: 'src/assets/img/2.jpg',
                    thumb: 'src/assets/img/thumb2.png',
                },
                {
                    main: 'src/assets/img/3.jpg',
                    thumb: 'src/assets/img/thumb3.png',
                },
                {
                    main: 'src/assets/img/4.jpg',
                    thumb: 'src/assets/img/thumb4.png',
                },
            ],
        },
        c_qty: 1,
        c_size: 0,
    },
    cart: [],
};
export const Related = [
    {
        data: {
            sku: 7643,
            name: 'Shoe OneX',
            details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iusto
  incidunt totam officia, nulla voluptate culpa voluptates delectus!
  Error, sint. Vel culpa sequi ipsa temporibus repudiandae rerum pariatur
  praesentium similique?`,
            sizes: [6, 7, 8, 9, 10, 11],
            price: 999.99,
            basePrice: 999.99,
            image: [
                {
                    main: 'src/assets/img/1.jpg',
                    thumb: 'src/assets/img/thumb1.png',
                },
                {
                    main: 'src/assets/img/2.jpg',
                    thumb: 'src/assets/img/thumb2.png',
                },
                {
                    main: 'src/assets/img/3.jpg',
                    thumb: 'src/assets/img/thumb3.png',
                },
                {
                    main: 'src/assets/img/4.jpg',
                    thumb: 'src/assets/img/thumb4.png',
                },
            ],
        },
        c_qty: 1,
        c_size: 0,
    },
    {
        data: {
            sku: 5678,
            name: 'Shoe TwoX',
            details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iusto
  incidunt totam officia, nulla voluptate culpa voluptates delectus!
  Error, sint. Vel culpa sequi ipsa temporibus repudiandae rerum pariatur
  praesentium similique?`,
            sizes: [7, 8, 9, 10, 11],
            price: 1199.99,
            basePrice: 1199.99,
            image: [
                {
                    main: 'src/assets/img/2.jpg',
                    thumb: 'src/assets/img/thumb2.png',
                },
                {
                    main: 'src/assets/img/1.jpg',
                    thumb: 'src/assets/img/thumb1.png',
                },
                {
                    main: 'src/assets/img/4.jpg',
                    thumb: 'src/assets/img/thumb4.png',
                },
                {
                    main: 'src/assets/img/3.jpg',
                    thumb: 'src/assets/img/thumb3.png',
                },
            ],
        },
        c_qty: 1,
        c_size: 0,
    },
    {
        data: {
            sku: 3456,
            name: 'Shoe ThreeX',
            details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iusto
    incidunt totam officia, nulla voluptate culpa voluptates delectus!
    Error, sint. Vel culpa sequi`,
            sizes: [6, 7, 8, 9, 10],
            price: 1549.99,
            basePrice: 1549.99,
            image: [
                {
                    main: 'src/assets/img/3.jpg',
                    thumb: 'src/assets/img/thumb3.png',
                },
                {
                    main: 'src/assets/img/1.jpg',
                    thumb: 'src/assets/img/thumb1.png',
                },
                {
                    main: 'src/assets/img/2.jpg',
                    thumb: 'src/assets/img/thumb2.png',
                },
                {
                    main: 'src/assets/img/4.jpg',
                    thumb: 'src/assets/img/thumb4.png',
                },
            ],
        },
        c_qty: 1,
        c_size: 0,
    },
    {
        data: {
            sku: 7890,
            name: 'Shoe FourX',
            details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iusto
    incidunt totam officia, nulla voluptate culpa voluptates delectus!
    Error, sint. Vel culpa sequi ipsa temporibus repudiandae rerum pariatur
    praesentium similique? Vel culpa sequi ipsa temporibus`,
            sizes: [6, 7, 8, 10],
            price: 1689.99,
            basePrice: 1689.99,
            image: [
                {
                    main: 'src/assets/img/4.jpg',
                    thumb: 'src/assets/img/thumb4.png',
                },
                {
                    main: 'src/assets/img/1.jpg',
                    thumb: 'src/assets/img/thumb1.png',
                },
                {
                    main: 'src/assets/img/2.jpg',
                    thumb: 'src/assets/img/thumb2.png',
                },
                {
                    main: 'src/assets/img/3.jpg',
                    thumb: 'src/assets/img/thumb3.png',
                },
            ],
        },
        c_qty: 1,
        c_size: 0,
    },
];
export const setSize = function (size) {
    const cartObj = Object.assign(Object.assign({}, State.currentShow), { c_size: size, c_qty: 1 });
    return cartObj;
};
export const addToCart = function (cart, size) {
    // Shallow copy the received cart so not to update the qty of all the cart items.
    const a = Object.assign({}, cart);
    a.c_size = size;
    a.c_qty = 1;
    const b = _cartOrganizer(a);
    // If no Show presensent with the matching size add
    if (!b) {
        State.cart.push(a);
    }
    // If shoe is present and the size is also same, increase the qty.
    // Return the quantity for the button
    if (b) {
        return ++b.c_qty;
    }
    // Return the quantity for the button
    return 1;
};
/**
 *
 * @param item Receives the shoe item
 * @returns the first shoe item present in cart that matches with the data and size of the received item. returns false if not found.
 */
const _cartOrganizer = function (item) {
    return (State.cart.find(cItem => cItem.data === item.data && cItem.c_size === item.c_size) || false);
};
