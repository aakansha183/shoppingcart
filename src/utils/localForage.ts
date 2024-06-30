import localforage from 'localforage';

localforage.config({
  name: 'shopping-cart-db',
  storeName: 'cart',
});

export default localforage;

