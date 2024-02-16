// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "./Cards";

function Cart() {
    const[cartArray,setCartArray]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/carts").then(data => {
            // console.log(data.data.carts);
            setCartArray([...data.data.carts]);
            

        })

    },[])
  return (
    <>
    <p>hello</p>
    <div className="row">
    {
    cartArray.map((item)=>(
        <div className="col-4 mb-2" key={item.id}>
            {
                // console.log(item.products);
                item.products.map((product, index)=>{
                    // console.log(product);
            <Cards key={index} data ={product}/>
                    
                })
            }
            <Cards data ={item}/>
         </div>


        // product = item.products;
        // product.map(value){
        //     console.log(value);
        // }
        ////////////////
        // {for(var i =0; i<5 ;i++){
        // // const product =item.products[i];
        // // console.log(product);
        // <div className="col-4 mb-2">
        //     <Cards data ={item.products[i]}/>
        //     </div>
        // }
        //////////////
        // console.log(item.products);
        // <div className="col-4 mb-2" key={item.id}>
        //     <Cards data ={item}/>
        //     </div>


    ))
   
    }
    </div>
    </>
  )
}

export default Cart