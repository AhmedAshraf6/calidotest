'use client';
import React, { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import MainReducer from '@/reducers/MainReducer';
import {
  ADD_USER,
  DETECT_FILTER,
  DETECT_NAVBAR,
  REMOVE_USER,
  ADD_PRODUCT,
  CALCULATE_TOTALS,
  REMOVE_PRODUCT,
  UPDATE_CARD,
  CHANGE_SHPPING_DETAIL,
  CLEAR_SHPPING_DETAIL,
  HANDLE_CHANGE_SHIPPING,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from '@/actions/actions';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import customFetch from '@/util/axios';
const MainContext = createContext();
const intialState = {
  navbar: false,
  filter: false,
  user: {},
  shippingDetails: {
    address: '',
    country: '',
  },
  isEditing: false,
  cart: [],
  total_items: 0,
  total_amount: 0,
};
export default function MainProvider({ children }) {
  const [state, dispatch] = useReducer(MainReducer, intialState);
  const token = Cookies.get('calidoUser');

  // Navbar filter Operation
  const detectNavbar = (val) => {
    dispatch({ type: DETECT_NAVBAR, payload: val });
  };
  const detectFilter = (val) => {
    dispatch({ type: DETECT_FILTER, payload: val });
  };
  const handleChangeShipping = (data) => {
    dispatch({ type: HANDLE_CHANGE_SHIPPING, payload: data });
  };
  // User Operation
  const AddUser = (user) => {
    dispatch({ type: ADD_USER, payload: user });
  };
  const removeUser = () => {
    dispatch({ type: REMOVE_USER });
  };
  const UpdateUserContext = async () => {
    if (!token) {
      return;
    }
    try {
      const response = await customFetch('/users/me', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const newData = {
        ...response?.data?.user,
        phoneNumber: response?.data?.phoneNumber[0],
      };
      AddUser(newData);
      console.log(response?.data);
    } catch (error) {
      toast.error('something wrong try again');
      console.log(error);
    }
  };
  // Shipping Operation
  const editShippingDetails = (shippingdetail) => {
    dispatch({ type: CHANGE_SHPPING_DETAIL, payload: shippingdetail });
  };
  // Clear Shipping Operation
  const clearShippingDetails = () => {
    dispatch({ type: CLEAR_SHPPING_DETAIL });
  };

  // Products Operation
  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };
  const updateCart = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  useEffect(() => {
    UpdateUserContext();
  }, []);
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);
  return (
    <MainContext.Provider
      value={{
        ...state,
        detectNavbar,
        AddUser,
        removeUser,
        detectFilter,
        editShippingDetails,
        clearShippingDetails,
        handleChangeShipping,
        addToCart,
        updateCart,
        removeFromCart,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
export const useMainContext = () => {
  return useContext(MainContext);
};
