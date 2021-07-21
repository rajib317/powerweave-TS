export interface Shoe {
  sku: number;
  name: string;
  details: string;
  sizes: number[];
  price: number;
  basePrice: number;
  image: imagePack[];
}
interface imagePack {
  thumb: string;
  main: string;
}

interface StateObject {
  currentShow: Shoe;
  cart: Shoe[];
}
export const State: StateObject = {
  currentShow: {
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
  cart: [],
};

export const Related: Shoe[] = [
  {
    sku: 1234,
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
  {
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
  {
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
  {
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
];
