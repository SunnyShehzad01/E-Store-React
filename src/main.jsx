import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import Cart from './pages/Cart/Cart.jsx'
import { ContextProvider } from './contextApi.jsx'
import ProductList from './Components/ProductList/ProductList.jsx'
import CategoryProducts from './pages/CategoryProducts/CategoryProducts.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import LoginPage from './pages/Login/loginPage.jsx'
import SignUpPage from './pages/SignUp/SignUpPage.jsx'
import ContactPage from './Components/ContactPage/ContactPage.jsx'
import AboutPage from './Components/AboutPage/AboutPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/categories/:name'  element={<CategoryProducts />}/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
