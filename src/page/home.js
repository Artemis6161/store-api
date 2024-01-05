import React from 'react'
import Product from "../component/product"

import "./home.css"
const home = () => {
  return (
    <div>
   <h2 className="heading">Welcome to the Redux toolKit store</h2>
   
   <section>
    <h3>Products</h3>
    <Product/>
 
   </section>
    </div>
  )
}

export default home
