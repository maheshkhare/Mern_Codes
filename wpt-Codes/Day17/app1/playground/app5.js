console.log('inside app5.js')

// getting values from an array
const products = [
  {
    id: 1,
    title: 'product 1',
    description: 'description 1',
    price: 100,
    review: 'good product',
  },
  {
    id: 2,
    title: 'product 2',
    description: 'description 2',
    price: 200,
  },
  {
    id: 3,
    title: 'product 3',
    description: 'description 3',
    price: 300,
    review: 'worst product',
  },
  {
    id: 4,
    title: 'product 4',
    description: 'description 4',
    price: 400,
  },
]

const template = (
  <div>
    <h3>App5</h3>
    {products.map((product) => {
      return (
        <div>
          <div>id: {product.id}</div>
          <div>title: {product.title}</div>
          <div>description: {product.description}</div>
          <div>price: {product.price}</div>
          {product.review && <div>review: {product.review}</div>}
          <hr />
        </div>
      )
    })}
  </div>
)

const root = document.getElementById('app')
ReactDOM.render(template, root)
