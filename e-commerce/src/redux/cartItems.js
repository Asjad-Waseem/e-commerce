import { createSlice } from '@reduxjs/toolkit';

export const cartItemsSlice = createSlice({
  name: 'items',
  initialState: {
    cartItems: [],
    cartItemsQuantity: 0,
    totalAmount: 0,
    searchState: "",
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cartItemsQuantity += 1
      state.cartItems.push(action.payload)
      state.totalAmount += Number(action.payload.Price)
    },
    removeItem: (state, action) => {
      state.cartItemsQuantity = state.cartItemsQuantity - 1;
      state.cartItems = state.cartItems.filter( (filteredItem) => filteredItem.id !== action.payload.id )
      state.totalAmount -= Number(action.payload.Price)
    },
    resetCart: (state) => {
      state.cartItems = []
      state.cartItemsQuantity = 0
      state.totalAmount = 0
    },
    searchItem: (state, action) => {
      state.searchState = action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, resetCart, searchItem } = cartItemsSlice.actions

export default cartItemsSlice.reducer