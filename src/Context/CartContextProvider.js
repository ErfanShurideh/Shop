import React, { useReducer,createContext } from 'react';

const initialState = {
    selectedItem : [],
    itemsCounter : 0,
    total : 0,
    checkout : false
}

const cartReduser = (state,action) =>{
    switch(action.type){
        case  "ADD_ITEM":
            if(!state.selectedItem.find(item => item.id === action.payload.id)){
                state.selectedItem.push({
                    ...action.payload,
                quantity : 1
            })
            }
            return{
                ...state,
                selsectedItem : [...state.selsectedItem]
            }
        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id);
            return{
                ...state,
                selsectedItem : [newSelectedItem]
            }
        case "INCREASE":
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id)
            state.selsectedItem[indexI].quantity++;
            return{
                ...state,
            }
         case "DECREASE":
            const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id)
            state.selsectedItem[indexD].quantity--;
            return{
                ...state,
            }
        case "CHECKOUT":
            return {
                selectedItem : [],
                itemsCounter : 0,
                total : 0,
                checkout : true
            }
        case "CLEAR":
            return {
                selectedItem : [],
                itemsCounter : 0,
                total : 0,
                checkout : false
            }
        defualt:
        return state;
    }

}
export const cartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(cartReduser,initialState)

    return (
        <CartContextProvider value={{state , dispatch}}>
            {children}
        </CartContextProvider>
    );
};

export default CartContextProvider;