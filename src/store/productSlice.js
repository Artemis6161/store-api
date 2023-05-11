import Axios from 'axios';
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: "ERROR",
    LOADING:"loading",
});

const productSlice = createSlice({
    name:"product",
initialState:{
    data: [],
    selectedproduct:{},
    status: STATUSES.IDLE,
    
   
},
reducers:{
//     add(state,action){
// state.push(action.payload)
//     },
//     remove(state,action){
// return state.filter((item) =>item.id !== action.payload)
//     }
},
extraReducers: (builder) =>{
builder 
.addCase(fetchProduct.pending,(state,action)=>{
state.status = STATUSES.LOADING;
})
.addCase(fetchProduct.fulfilled,(state,action)=>{
state.data = action.payload;
    state.status = STATUSES.IDLE;
    })
.addCase(fetchProduct.rejected,(state,action)=>{
        state.status = STATUSES.ERROR;
        })
        .addCase(fetchProductdetail.fulfilled,(state,action)=>{
            state.selectedproduct = action.payload;
                state.status = STATUSES.IDLE;
                })
}

})

export default productSlice.reducer;

// thunks
export const fetchProduct = createAsyncThunk('gets/getUser', async () => {
    // const res = await fetch('https://fakestoreapi.com/products');
    // const data = await res.json();
    // return data;
   
    return Axios.get("https://fakestoreapi.com/products").then(res =>{
        return  res.data;
    })
  
})
export const fetchProductdetail = createAsyncThunk('gets/getUserdetail', async (productId) => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    return data;
   
    // return Axios.get("https://fakestoreapi.com/products/1").then(res =>{
    //     return  res.data;
    })
  

