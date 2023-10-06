import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryProductList from '../../Components/CategoryProductList/CategoryProductList'
import ProductList from '../../Components/ProductList/ProductList'
import { dataContext } from '../../contextApi'

const CategoryProducts = () => {

    const {name} = useParams()
    const [categoryProduct, setCategoryProduct] = useState([])

    useEffect(()=>{
        const fetchCategoryName = async() => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data = await response.json()
            // console.log(data);
            setCategoryProduct(data)
        }
        fetchCategoryName()
    }, [])
    console.log(categoryProduct);

  return (
    <>
        <CategoryProductList categoryName={categoryProduct} name={name}/>
        {/* <ProductList products={products}/> */}
    </>
  )
}

export default CategoryProducts