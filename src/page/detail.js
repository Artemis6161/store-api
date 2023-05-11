import React, { useEffect } from "react";
import "./detail.css"
import { useNavigate } from "react-router";
import { add } from "../store/cartSlice"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {fetchProductdetail,selectedproduct} from "../store/productSlice"
function Detail(props) {
  const navigate = useNavigate();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { selectedproduct: detail, status } = useSelector((state) => state.product);
    console.log(detail);
    useEffect(() => {
      dispatch(fetchProductdetail(productId));
     
    }, [dispatch, productId]);
    const handleAdd = (pro) => {
      dispatch(add(pro));
      navigate("/cart");
    };
  return (
    
  <div className="detail">
    <img className="img" src={detail.image} alt="" />
    <div >
       <h1>{detail.title}</h1>
      <p>{detail.description}</p>
      <h1>{detail.categiry}</h1>
      <h1>{detail.price}</h1>
      <button  className='btn'  onClick={() => handleAdd(detail)}>Add to cart</button>
      </div>
   
   
    </div>
  )
}

export default Detail





