import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  const cart = useSelector((store) => store.cart)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home">
            <a className="navbar-brand">App1</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/counter">
                  <a className="nav-link">Counter</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dummy-counter">
                  <a className="nav-link">DummyCounter</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products">
                  <a className="nav-link">Products</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <span className="cart-count">Cart [{cart.length}]</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
