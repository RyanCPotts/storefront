import { filteredProducts } from "../actions"

let initialState = {

    products: [
        // {
        //     name:'bicycles', categories: 'electronics', description: 'this is a bicycle', price:3000,
        //     inStock: 5
        //         },
        // {
        //     name:'banana', categories: 'food', description: 'this is a banana', price:10,
        //     inStock: 5

        // },
    ],
    filteredProducts: []
}

const productsReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case 'FILTER_PRODUCTS':
            return { ...state, products: payload }
        case 'FILTER_PRODUCTS_BY_CATEGORY':
        return{...state, filteredProducts: state.products.filter(product => product.categories === payload)}
        case 'UPDATE_PRODUCT_QUANTITY':
        return{...state,
             products: state.products.map((product)=>product.id === payload.productID?{...product, inStock: payload.quantity}:product)
             ,
             filteredProducts: state.filteredProducts.map((product)=>product.id === payload.productID?{...product, inStock: payload.quantity}:product)
      
                }
        case 'ADD_TO_CART':
        return{...state,
            products: state.products.map((product)=>product.id === payload.productID?{...product, inStock: product.inStock-1}:product)
            ,
            filteredProducts: state.filteredProducts.map((product)=>product.id === payload.productID?{...product, inStock: product.inStock-1}:product)
     
               }
        default:
            return state;
    }
}
export default productsReducer