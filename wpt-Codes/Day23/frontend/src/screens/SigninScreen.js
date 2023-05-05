import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { signin } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SigninScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response } = userSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (response && response.status == 'success') {
      sessionStorage.setItem('token', response.data.token)
      props.history.push('/home')
    } else if (response && response.status == 'error') {
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <div>
      <Header title="Signin" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <button onClick={onSignin} className="btn btn-success">
            Singin
          </button>
          <div className="float-end">
            New User? <Link to="/signup">Signup here</Link>
          </div>
        </div>
      </div>
      {loading && <div>waiting for response</div>}
    </div>
  )
}

export default SigninScreen
