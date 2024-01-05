import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { add } from "../store/cartSlice"
import { fetchProduct } from "../store/productSlice"
import { STATUSES } from "../store/productSlice"
import { Link } from "react-router-dom"
import "./product.css"
const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
// const [products,setProducts] = useState([]);
useEffect(()=>{
dispatch(fetchProduct());
  // const fetchProducts = async () =>{
  //   const res = await axios.get('https://fakestoreapi.com/products');
  //   // const data = await res.json();
  //   console.log(res.data);
  //   setProducts(res.data)

  // }
  // fetchProducts();
},[]);
const handleAdd = (pro) => {
  dispatch(add(pro));
};

if(status ===STATUSES.LOADING){
  return <h2>Loading.......</h2>
}
if(status ===STATUSES.ERROR){
  return <h2>some thing went wrong!</h2>
}
  return (
    <div className='productsWrapper'>
     {products.map((product)=>(
   
      <div className="card" key={product.key} >
      
      <Link to={`/details/${product.id}`} className='link'>
      <img src={product.image} alt="img" />
      <h4>{product.title}</h4>
      <h5>{product.price}</h5>
      </Link>
      <button onClick={() => handleAdd(product)} className='btn' >Add to cart</button>
      </div>
     
     ))}
    </div>
  )
}

export default Product


