'use client';
import React, { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import FilterReducer from '@/reducers/FilterReducer';
import {
  CHANGE_PAGE,
  CLEAR_FILTER,
  GET_ALL_PRODUCTS,
  GET_FILTERED_ERROR,
  HANDLE_CHANGE_FILTER,
  SHOW_LOADING_FILTER,
} from '@/actions/actions';
import customFetch from '@/util/axios';
import { useMainContext } from './MainContext';
const FilterContext = createContext();
const initialFiltersState = {
  order: 'latest',
  sortOptions: [
    {
      name: 'newest',
      value: 'newest',
    },
    {
      name: 'oldest',
      value: 'oldest',
    },
    {
      name: 'High Salary',
      value: 'high',
    },
    {
      name: 'Low Salary',
      value: 'low',
    },
    {
      name: 'A-Z',
      value: 'az',
    },
    {
      name: 'Z-A',
      value: 'za',
    },
  ],
};
const initialState = {
  isLoading: false,
  products: [],
  totalProducts: 0,
  numOfPages: 1,
  page: 1,
  isError: false,
  ...initialFiltersState,
};
export default function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(FilterReducer, initialState);
  const { detectFilter } = useMainContext();
  const GetProducts = async () => {
    dispatch({ type: SHOW_LOADING_FILTER });
    try {
      // let url = `/products?sort=${state.sort}&page=${state.page}`;
      const res = await customFetch.get(
        `/products?order=${state.order}&page=${state.page}`
      );
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res?.data?.products?.rows,
        payload2: res?.data?.numberOfPages,
        payload3: res?.data?.products?.count,
      });
    } catch (error) {
      dispatch({
        type: GET_FILTERED_ERROR,
      });
    }
  };
  const handleChangeFunc = (data) => {
    dispatch({
      type: HANDLE_CHANGE_FILTER,
      payload: data,
    });
    detectFilter(false);
  };
  const ClearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
    detectFilter(false);
  };
  const changePage = (page) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: page,
    });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        handleChangeFunc,
        ClearFilter,
        changePage,
        GetProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
export const useFilterContext = () => {
  return useContext(FilterContext);
};
