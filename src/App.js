import React from 'react'

import Home from "./page/home.js"
import {Provider} from "react-redux"
import Cart from "./page/cart.js"
import Detail from "./page/detail.js"
import Navbar from './component/navbar.js'
import store from"./store/store.js"
import "../src/App.css"
import {
 
  Routes,
  Route,
  BrowserRouter,
 
} from "react-router-dom";




const App = () =>  {
  return(
    <div className='app'>
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
      
       
          <Route path="/" element={<Home/>}></Route>
         
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/details/:productId" element={<Detail data="product"/>}></Route>
       
        </Routes>
   
      </BrowserRouter>
      </Provider>
      </div>
  )
}

 export default App;