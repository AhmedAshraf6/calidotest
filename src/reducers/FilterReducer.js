import {
  CHANGE_PAGE,
  CLEAR_FILTER,
  GET_ALL_PRODUCTS,
  GET_FILTERED_ERROR,
  HANDLE_CHANGE_FILTER,
  SHOW_LOADING_FILTER,
} from '@/actions/actions';

export default function FilterReducer(state, action) {
  if (action.type === SHOW_LOADING_FILTER) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_FILTERED_ERROR) {
    return { ...state, isLoading: false, isError: true };
  }
  if (action.type === GET_ALL_PRODUCTS) {
    return {
      ...state,
      isLoading: false,
      products: action.payload,
      numOfPages: action.payload2,
      totalProducts: action.payload3,
    };
  }
  if (action.type === HANDLE_CHANGE_FILTER) {
    const { name, value } = action.payload;
    return { ...state, page: 1, [name]: value };
  }
  if (action.type === CLEAR_FILTER) {
    return { ...state, sort: 'latest' };
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload };
  }
  return state;
}
