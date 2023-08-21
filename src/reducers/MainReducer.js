import {
  ADD_USER,
  CHANGE_SHPPING_DETAIL,
  CLEAR_SHPPING_DETAIL,
  DETECT_FILTER,
  DETECT_NAVBAR,
  HANDLE_CHANGE_SHIPPING,
  REMOVE_USER,
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
  // Products
  // if (action.type === ADD_PRODUCT) {
  //   const item = state.productsData.find(
  //     (product) => product.id === action.payload
  //   );
  //   return {
  //     ...state,
  //     card: [...state.card, item],
  //     itemsInCard: [...state.itemsInCard, item.id],
  //   };
  // }
  // if (action.type === REMOVE_PRODUCT) {
  //   const newCard = state.card.filter(
  //     (product) => product.id !== action.payload
  //   );
  //   const newItemsInCard = state.itemsInCard.filter(
  //     (productId) => productId !== action.payload
  //   );
  //   return {
  //     ...state,
  //     card: newCard,
  //     itemsInCard: newItemsInCard,
  //   };
  // }
  // if (action.type === CALCULATE_TOTALS) {
  //   let amount = 0;
  //   let total = 0;
  //   state.card.forEach((item) => {
  //     amount += item.amount;
  //     total += item.amount * item.price;
  //   });
  //   return {
  //     ...state,
  //     amount,
  //     total,
  //   };
  // }
  // if (action.type === UPDATE_CARD) {
  //   const newCard = state.card.map((product) => {
  //     if (product.id === action.payload) {
  //       return { ...product, amount: Number(action.payload2) };
  //     } else {
  //       return product;
  //     }
  //   });
  //   return { ...state, card: newCard };
  // }
  // Products
  return state;
}
