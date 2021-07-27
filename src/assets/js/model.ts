import { StateObject, Shoe } from './model.d';

const imgPathGenerate = function (from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, i) => {
    const a = {
      main: `src/assets/img/main/img${from + i}.jpg`,
      thumb: `src/assets/img/thumbs/img${from + i}.jpg`,
    };
    return a;
  });
};

export const DefaultShow = {
  data: {
    sku: 1234,
    name: `Nike Men's Air Zoom Pegasus 36 Running Shoes`,
    details: `Weight: approx. 12.0 oz.<br />
    Sockliner: Fitsole sockliner.`,
    sizes: [7.5, 8, 8.5, 9, 10],
    price: 99.99,
    basePrice: 99.99,
    image: imgPathGenerate(1, 5),
  },
  c_qty: 1,
  c_size: 0,
};

export const State: StateObject = {
  currentShow: DefaultShow,
  cart: [],
};
export const Related: Shoe[] = [
  {
    data: {
      sku: 7643,
      name: 'TIAMOU Running Shoes Women Walking Athletic Tennis Non Slip Blade Type Sneakers',
      details: `<ul class="a-unordered-list a-vertical a-spacing-mini">


      <li><span class="a-list-item">
      Rubber sole
      
      </span></li>
      
      <li><span class="a-list-item">
      Rubber Outsole——The rubber outsole offers impact cushioning, anti-twist, abrasion-resistant and anti-slip performance for prolonging the wearing time of our shoes.
      
      </span></li>
      
      <li><span class="a-list-item">
      Mesh Vamp——soft and comfortable, air permeability, keep your feet cool and dry,It's soft and protective to cushion your every step.
      
      </span></li>
      
      <li><span class="a-list-item">
      Occasions——Stylish and unique design perfect for all occasions: Casual, Walking, Running, Jogging, Training, Indoor, Sports, Outdoor, Travel, Exercise and Workout.
      
      </span></li>
      
      <li><span class="a-list-item">
      Our women's shoes inherit the appearance of TIAMOU men's shoes and add more styles to choose from.
      
      </span></li>
      
      <li><span class="a-list-item">
      Shopping Experience——If you have any questions about shopping, please contact me.
      
      </span></li>
      
      </ul>`,
      sizes: [6, 7, 8, 9, 10, 11],
      price: 999.99,
      basePrice: 999.99,
      image: imgPathGenerate(6, 10),
    },
    c_qty: 1,
    c_size: 0,
  },
  {
    data: {
      sku: 5678,
      name: `Salomon Men's Xa Elevate GTX Trail Running Shoes`,
      details: `Rubber sole <br />
      Agility : Elevate's Sensifit supports the foot without constricting it, while the Advanced Chassis combined with Energy Cell+ provides agile stability.<br />
      Protection : Profeel film protects the soles of your feet on rough, rocky terrain. And a lightweight toe cap and mudguard protect the base of the foot from dings and scrapes.<br />
      Grip  : A premium wet traction Contagrip sole ensures grip on all trail conditions, and a scrambling zone around the forefoot has more surface contact, for grip on rocky terrain.`,
      sizes: [7, 8, 9, 10, 11],
      price: 159.99,
      basePrice: 159.99,
      image: imgPathGenerate(11, 15),
    },
    c_qty: 1,
    c_size: 0,
  },
  {
    data: {
      sku: 3456,
      name: 'Nike Lebron 11 Premium "What The Lebron" - 650884 400',
      details: `100% Leather<br />
      Imported<br />
      The "What the..." concept hits the LeBron 11 with a mash-up of the shoe's many colorways all thrown together. With no two panels of the shoe the same, it makes for the wildest colorway for LeBron's eleventh signature shoe.<br />
      Lebron 11 Premium<br />
      Style Number: 650884 400<br />
      Nickname: What The Lebron<br />
      Materials: Synthetic
      `,
      sizes: [6, 7, 8, 9, 10],
      price: 660,
      basePrice: 660,

      image: imgPathGenerate(16, 22),
    },
    c_qty: 1,
    c_size: 0,
  },
  {
    data: {
      sku: 7890,
      name: `Troadlop Men's Running Shoes Non Slip Shoes Breathable Lightweight Sneakers Slip Resistant Athletic Sports Walking Gym Work Shoes`,
      details: `<ul class="a-unordered-list a-vertical a-spacing-mini">
      <li><span class="a-list-item">
      mesh
      </span></li>
      <li><span class="a-list-item">
      Rubber sole
      </span></li>
      <li><span class="a-list-item">
      Mesh upper offers a snug, sock-like fit, comfortable, breathable and lightweight. Knit material makes it possible that your feet free breath when you run or walk. Soft and protective to cushion your every step
      </span></li>
      <li><span class="a-list-item">
      Cushioned insole and breathable lining give you exceptional support and optimize the unique properties of every touch and push. Memory Foam Insole has good elasticity
      </span></li>
      <li><span class="a-list-item">
      Non-Slip: The rubber outsole is lightweight and offers impact cushioning, anti-twist, abrasion-resistant and anti-slip performance.Non Slip Shoes offer flexibility and ground feel
      </span></li>
      <li><span class="a-list-item">
      Slip On: Lace up and slip on style give an easily put on and totally fit experience. Fashion design with no significant mark outside, stable support for casual and athletic occasion
      </span></li>
      <li><span class="a-list-item">
      Fits for long time standing work, casual walking, running, sports, athletic, workout, floor shoes, travel, nursing, driving, fishing, Jogging, dress, shopping
      </span></li>
      </ul>`,
      sizes: [6, 7, 8, 10],
      price: 45.63,
      basePrice: 45.63,
      image: imgPathGenerate(23, 28),
    },
    c_qty: 1,
    c_size: 0,
  },
];

console.log(imgPathGenerate(1, 5));
export const setSize = function (size: number) {
  const cartObj: Shoe = { ...State.currentShow, c_size: size, c_qty: 1 };
  return cartObj;
};
export const addToCart = function (cart: Shoe, size: number) {
  // Shallow copy the received cart so not to update the qty of all the cart items.
  const a = { ...cart };
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
const _cartOrganizer = function (item: Shoe) {
  return (
    State.cart.find(
      cItem => cItem.data === item.data && cItem.c_size === item.c_size
    ) || false
  );
};

export const changeQty = function (cartItem: Shoe, changeBy: number) {
  State.cart.forEach(item => {
    if (
      item.data.sku === cartItem.data.sku &&
      item.c_size === cartItem.c_size &&
      item.c_qty >= 1
    )
      item.c_qty += changeBy;
  });
};

export const delCart = function (cart: Shoe) {
  const index = State.cart.indexOf(cart);
  State.cart.splice(index, 1);
};

export const findBySKU = function (
  sku: number,
  target: Shoe[] = [DefaultShow, ...Related]
) {
  const getItem = target.find(shoe => shoe.data.sku === sku);
  if (!getItem) throw 'Item not found';
  return getItem;
};

export const findBySKUnSize = function (
  sku: number,
  size: number,
  target: Shoe[] = [DefaultShow, ...Related]
) {
  const getItem = target.find(
    shoe => shoe.data.sku === sku && shoe.c_size === size
  );
  if (!getItem) throw 'Item not found';
  return getItem;
};
