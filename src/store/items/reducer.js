import produce from 'immer';
import { toNumber } from 'lodash';
import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_REMOVED,
  ITEM_QUANTITY_UPDATED
} from '../items/actions';
let id = 1;

export const initialItems = [
  {
    uuid: id++,
    name: 'Awesome Tofu Roast',
    price: 14,
    quantity: 1,
    total: toNumber(this?.price * this?.quantity)
  },
  {
    uuid: id++,
    name: 'Vegan Ham Sandwich',
    price: 12,
    quantity: 1,
    total: this?.price * this?.quantity
  }
];

// Immer Produce Applied inside of it.
/*
export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    return produce(state, (draftState) => {
      const item = { uuuid: id++, quantity: 1, ...action.payload };
      draftState.push(item);
    });
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.uuid === action.payload.uuid);
      item.price = parseInt(action.payload.price, 10);
    });
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.uuid === action.payload.uuid);
      item.quantity = parseInt(action.payload.quantity, 10);
    });
  }

  return state;
};
*/

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    return produce(state, (draftState) => {
      const item = { uuuid: id++, quantity: 1, ...action.payload };
      state.push(item);
    });
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price, 10);
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity, 10);
  }
}, initialItems);

export default reducer;
