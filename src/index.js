import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {return goods.filter((item) => item.brand === brand)};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {return goods.filter((item) => item.color ===  color)};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {return goods.filter((item) => item.model === model)};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {return goods.filter((item) => item.memory === memory)};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {return goods.filter((item) => item.price === price)};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {return goods.filter((item) => item.country === country)};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {return goods.filter((item) => item.os === os)};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter( (item) => item.price >= from && item.price <= to ).sort( (a, b) => {
  if (a.price > b.price) return 1;
  if (a.price < b.price) return -1;
  return 0;})
};

const minPriceReducer = () => {
  return goods.reduce ( (acc, curr) => {return Math.min(acc, curr.price)}, Infinity)
};

const maxPriceReducer = () => {
  return goods.reduce ( (acc, curr) => {return Math.max (acc, curr.price)}, 0)
};;

const toMaxSorter = () => {return goods.sort ( (a, b) => {
  if (a.price < b.price) return 1;
  if (a.price > b.price) return -1;
  return 0;
  } )
};

const toMinSorter = () => {return goods.sort ( (a, b) => {
  if (a.price > b.price) return 1;
  if (a.price < b.price) return -1;
  return 0;
  } )
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
