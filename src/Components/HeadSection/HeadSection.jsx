import React, { useContext } from 'react'
import { dataContext } from '../../contextApi'

const HeadSection = () => {

    const {products} = useContext(dataContext)

  return (
    <>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{products[1].title}
                    {/* <br className="hidden lg:inline-block">readymade gluten */}
                </h1>
                <p className="mb-8 leading-relaxed">{products[1].description}</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop more </button>
                    {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                </div>
                </div>
                <div className="lg:max-w-xs lg:w-full md:w-1/2 w-5/6">
                    <img className="object-contain object-center rounded  bg-gray-100" alt="hero" src={products[1].image} />
                </div>
            </div>
        </section>
    </>
  )
}

export default HeadSection