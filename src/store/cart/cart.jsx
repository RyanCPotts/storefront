const initialState = {
    cartItems: []

}

const cartReducer = (state = initialState, action)=>{
    let {type, payload} = action;
    switch(type){
        case'ADD_TO_CART':
        return{
            ...state, cartItems: [...state.cartItems, payload]
        }
        case'REMOVE_FROM_CART':
        return{
            ...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload)
        }
        default:
            return state
    }
}

export default cartReducer