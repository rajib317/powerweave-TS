export interface Shoe {
  data: {
    sku: number;
    name: string;
    details: string;
    sizes: number[];
    price: number;
    basePrice: number;
    image: imagePack[];
  };
  c_qty: number;
  c_size: number;
}
interface imagePack {
  thumb: string;
  main: string;
}

// interface Cart extends Shoe {
//   c_qty: number;
//   c_size: number;
// }

export interface StateObject {
  currentShow: Shoe;
  cart: Shoe[];
}
