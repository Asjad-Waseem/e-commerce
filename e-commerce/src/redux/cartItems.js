import { createSlice } from '@reduxjs/toolkit';

export const cartItemsSlice = createSlice({
  name: 'items',
  initialState: {
    cartItems: [],
    cartItemsQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cartItemsQuantity += 1
      state.cartItems.push(action.payload)
      // state.totalAmount = state.totalAmount + action.payload.price

    },
    removeItem: (state, action) => {
      state.cartItemsQuantity -= 1
      state.cartItems.pop(action.payload);
      // state.cartItems.filter(cartItem => cartItem.id !== action.payload), 
      // state.totalAmount = state.totalAmount + cartItem.price
    },
    resetCart: (state) => {
      state.cartItems = []
      state.cartItemsQuantity = 0
      state.totalAmount = 0
      // state.cartItemsQuantity = 0,
      // state.totalAmount = 0
    },



    // addItem: (state, action) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.cartItemsQuantity += 1, 
    //   state.cartItems.push(action.payload), 
    //   state.totalAmount = state.totalAmount + cartItem.price

    // },
    // removeItem: (state, action) => {
    //   state.cartItemsQuantity -= 1,
    //   state.cartItems.filter(cartItem => cartItem.id !== action.payload), 
    //   state.totalAmount = state.totalAmount + cartItem.price
    // },
    // resetCart: (state) => {
    //   state.cartItems = [],
    //   state.cartItemsQuantity = 0,
    //   state.totalAmount = 0
    // },









  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, resetCart } = cartItemsSlice.actions

export default cartItemsSlice.reducer