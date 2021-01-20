import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

const Products = ({ products }) => {
  console.log(products)
  return (
    <div>
      {products && products.length ?
        products.map(product => (<Product product={product} />)) : null}
    </div>
  )
}

const mapStateToProps = state => {
  const { allIds, byIds } = state
  const products = allIds.map(id => (
    { ...byIds[id], id }
  ))
  return {
    products
  }
}

export default connect(
  mapStateToProps,
  null
)(Products)