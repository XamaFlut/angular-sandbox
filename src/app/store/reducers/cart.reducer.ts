import { CartActionTypes, CartActions } from '../actions/cart.action';

export let initialState = [];

export function reducer(state = initialState, action: CartActions){
    switch(action.type){
        case CartActionTypes.ADD_CAR:
            return [...state, action.payload];
        case CartActionTypes.REMOVE_CAR:
            const car = action.payload;
            return state.filter(c => c._id !== car._id);
        default:
            return state;
    }
}