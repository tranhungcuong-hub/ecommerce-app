import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    sale_price: number;
    thumnail: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItemIndex = state.items.findIndex(
                (i) => i.id === action.payload.id
            );

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;