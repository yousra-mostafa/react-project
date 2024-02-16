/* eslint-disable react/prop-types */
// import React from 'react'

function Cards({data}) {
    // console.log(data.products);
    data.products.map((product, index)=>{
        console.log(product);
        data= product;
        
    })
  return (
    <>
    
    <div className="card" style={{ width: "19rem" }}>
    <img className="card-img-top" height="150px" src={data.thumbnail} />

  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">
    price:{data.price}
     </p>
     <p className="card-text">
     quantity: {data.quantity}
     </p>
    <a href="#" className="btn btn-primary">
      buy now
    </a>
  </div>
</div>

</>

  )
}

export default Cards