import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CardItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};
type CartState = {
  items: CardItem[];
};
const initialState: CartState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        // decrese the quantity
        state.items[itemIndex].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
