let initialState = {
    categories:[
        {name:'electronics', displayName:'Electronics', description:'electronic items'},
        {name:'food', displayName: 'Food', description:'food items'}
    ],
    
    activeCategory:''
}

const categoriesReducer = (state = initialState, action) => {
    let {type, payload} = action

    switch(type){
        case 'CATEGORY':
            return{...state, activeCategory: payload}
        case 'RESET':
            return initialState
        default: return state;            
    }
}

export const reset = ()=>{
    return{
        type: 'RESET',

    }
}

export default categoriesReducer