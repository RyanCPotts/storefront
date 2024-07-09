let initialState = {
    
    products:[
        {
            name:'bicycles', categories: 'electronics', description: 'this is a bicycle', price:3000
        },
        {
            name:'banana', categories: 'food', description: 'this is a banana', price:10
        },
    ],
    filteredProducts:[]
}

const productsReducer = (state = initialState, action)=>{
    let {type, payload} = action
    switch(type){
        case 'FILTER_PRODUCTS':
            return{...state, filteredProducts: state.products.filter(product => product.categories === payload)}
            default:
                return state;
    }
}
export default productsReducer