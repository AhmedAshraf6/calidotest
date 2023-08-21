import {
  ADD_TO_CART,
  ADD_USER,
  CHANGE_SHPPING_DETAIL,
  CLEAR_SHPPING_DETAIL,
  COUNT_CART_TOTALS,
  DETECT_FILTER,
  DETECT_NAVBAR,
  HANDLE_CHANGE_SHIPPING,
  REMOVE_CART_ITEM,
  REMOVE_USER,
  TOGGLE_CART_ITEM_AMOUNT,
} from '@/actions/actions';

export default function MainReducer(state, action) {
  if (action.type === DETECT_NAVBAR) {
    return { ...state, navbar: action.payload };
  }
  if (action.type === DETECT_FILTER) {
    return { ...state, filter: action.payload };
  }
  if (action.type === ADD_USER) {
    return { ...state, user: action.payload };
  }
  if (action.type === REMOVE_USER) {
    return { ...state, user: {} };
  }
  // Shipping detail
  if (action.type === CHANGE_SHPPING_DETAIL) {
    const { id, country, address } = action.payload;
    return { ...state, shippingDetails: action.payload, isEditing: true };
  }
  if (action.type === CLEAR_SHPPING_DETAIL) {
    return {
      ...state,
      shippingDetails: { address: '', country: '' },
      isEditing: false,
    };
    // console.log(action.payload);
  }
  if (action.type === HANDLE_CHANGE_SHIPPING) {
    const { name, value } = action.payload;
    return {
      ...state,
      shippingDetails: { ...state.shippingDetails, [name]: value },
    };
  }
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name: product.name_en,
        amount,
        price: product.newPrice || product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === 'dec') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }

      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  return state;
}
