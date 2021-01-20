import React from 'react'

const Product = ({product}) => {
  return (
    <div key={product.id}>
      <h1>{product.product.name}</h1>
      <img
        src={product.product.image}
        alt="pic"
      />
    </div>
  )
}

export default Product