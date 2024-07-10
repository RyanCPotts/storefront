import React from 'react'
import{useSelector, useDispatch} from 'react-redux'
import{category, filteredProducts} from '../../store/actions/'

const Categories = ({handleClick})=>{

const categories = useSelector(state => state.categories.categories)
console.log(categories)
const activeCategory = useSelector(state => state.categories.activeCategory)




    return(
        // <h1>Hello World!</h1>
        <>
        {categories.map(category => 
            <button selected = {category.name === activeCategory}key = {category.name} onClick = {()=> handleClick(category.name)}>{category.displayName || category.name}</button>
        )}
        </>
    )
}

export default Categories