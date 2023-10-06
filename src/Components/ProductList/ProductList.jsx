import React, { useContext } from 'react'
import { dataContext } from '../../contextApi'
import { Link } from 'react-router-dom'

const ProductList = () => {

    const {products} = useContext(dataContext)

    return (
    <>
        <section className="text-gray-600 body-font">
            <div className='flex flex-col text-center w-full mt-20'>
                <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1'>Products</h2>
                <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>Most Popular Products</h1>
            </div>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

            {
                products.length > 0 ? 
                    products.map((product)=>{
                        return (
                            <div key={product?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer border border-opacity-50">
                                <Link to={`/products/${product?.id}`} className="block relative h-48 rounded overflow-hidden">
                                    <img alt={product?.title} className=" object-center w-full h-full block object-contain" src={product?.image}/>
                                    
                                </Link>
                                <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{product?.category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{product?.title}</h2>
                                        <p className="mt-1 text-md font-semibold">${product?.price}</p>
                                </div>
                            </div>
                        )
                    })
                
                : <p>Loading...</p>
            }

            </div>
        </div>
        </section>

    </>
  )
}

export default ProductList