import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams, redirect } from "react-router-dom";
import app from "../firebase";

export const dataContext = createContext(null)

export const ContextProvider = (props) => {

    // const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [cartItems, setCartItems] = useState({})
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const [singleItem, setSingleItem] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    const navigation = [
        {
          name: "Home",
          path: '/'
        },
        {
          name: "Products",
          path: '/products'
        },
        {
          name: "About",
          path: '/about'
        },
        {
          name: "Contact",
          path: '/contact'
        }
      ]
//Firebse Auth
      // useEffect(()=>{
      //   app.auth().onAuthStateChanged(currentUser)
      // }, [])

    //Fetching All products
    useEffect(()=>{
        const fetchProducts = async() => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data);
            setProducts(data)
        }
        fetchProducts()
    }, [])

    //Fetch a Single Product
    useEffect(()=>{
      const fetchProducts = async() => {
        const randomItem = Math.floor((Math.random() * 5) + 1)
        const response = await fetch(`https://fakestoreapi.com/products/${randomItem}`)
        const data = await response.json()
        // console.log(data);
        setSingleItem(data)
      }
      fetchProducts()
    }, [])

    //Fetching all Categories
    useEffect(()=>{
        const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            setCategories(data)
        }
        fetchCategories()
    }, [])

    //ProductPage
    const handleCart = (product, redirect) => {
      const isProductExist = cart.find(item => item.id === product.id)
      if(isProductExist){
        const updatedCart = cart.map((item) => {
          if (item.id === product.id){
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })

        localStorage.setItem('cart', JSON.stringify(updatedCart))
      } else {
        localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
      }
      alert("product added to cart")
      if(redirect){
        redirect('/cart')
      }

  }

  //Cart -> CartList
  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id){
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    // navigate('/cart')
  }

  const handleIncrement = (id)=>{
    const updatedCart = cart.map((item) => {
      if (item.id === id){
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    // navigate('/cart')
  }

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    // navigate('/cart')
  }


    const contextValue = {  products, 
                            navigation, 
                            categories, 
                            cartItems, 
                            setCartItems, 
                            handleCart, 
                            handleDecrement, 
                            handleIncrement, 
                            handleRemoveItem, 
                            singleItem
                          }

    return (
        <dataContext.Provider value={contextValue}>
            {props.children}
        </dataContext.Provider>
    )
}