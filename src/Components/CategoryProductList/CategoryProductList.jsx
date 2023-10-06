import React from 'react'
import { Link } from 'react-router-dom'

const CategoryProductList = ({categoryName, name}) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <h6 className='text-center text-xl mt-20'>Products</h6>
        <h2 className='text-center text-6xl uppercase'>{name}</h2>
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          {
              categoryName.length > 0 ? 
                  categoryName.map((item)=>{
                      return (
                          <Link to={`/products/${item.id}`} key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                              <div className="block relative h-48 rounded overflow-hidden">
                              <img alt={item?.title} className=" object-center w-full h-full block object-contain" src={item?.image}/>
                              </div>
                              <div className="mt-4">
                              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{item?.category}</h3>
                              <h2 className="text-gray-900 title-font text-lg font-medium">{item?.title}</h2>
                              <p className="mt-1">${item?.price}</p>
                              </div>
                          </Link>
                      )
                  })
              
              : <p className='text-center'>Loading...</p>
          }

          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryProductList