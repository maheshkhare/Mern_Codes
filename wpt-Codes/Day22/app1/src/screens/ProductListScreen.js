import Header from '../components/Header'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch } from 'react-redux'

const ProductListScreen = () => {
  const dispatch = useDispatch()

  const products = [
    { id: 1, title: 'product 1', description: 'description 1', price: 100 },
    { id: 2, title: 'product 2', description: 'description 2', price: 200 },
    { id: 3, title: 'product 3', description: 'description 3', price: 300 },
    { id: 4, title: 'product 4', description: 'description 4', price: 400 },
    { id: 5, title: 'product 5', description: 'description 5', price: 500 },
  ]

  const onAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div>
      <Header title="Products" />

      <div className="row">
        {products.map((product) => {
          return (
            <div className="product col-md-3">
              <div className="title">{product.title}</div>
              <div className="description">{product.description}</div>
              <div className="price">Price: {product.price}</div>
              <button
                onClick={() => {
                  onAddToCart(product)
                }}
                className="btn btn-sm btn-success btn-add-to-cart">
                Add to cart
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductListScreen
