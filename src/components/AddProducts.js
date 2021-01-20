import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addProducts } from '../redux/actions'
import '../css/addproducts.css'

const AddProducts = ({ addProducts }) => {
  const [product, setProduct] = useState({
    name:'',
    image:''
  });


  const productAdd = (e) => {
    e.preventDefault()
    addProducts(product)
    setProduct({
      name: '',
      image: ''
    })
  }


  return (
    <form onSubmit={productAdd}>
        <label>
          Product Name:
          <input
          value={product.name}
          onChange={(e) => setProduct(prevState => ({
            ...product,
            name: e.target.value,
            image: prevState.image
          }))}
          />
        </label>
        <label>
          Product Image:
          <input
          value={product.image}
          onChange={(e) => setProduct(prevState => ({
            ...product,
            name: prevState.name,
            image: e.target.value
          }))}
          />
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}



export default connect(
  null,
  { addProducts }
)(AddProducts)