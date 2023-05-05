import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SignupScreen = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const userSignup = useSelector((store) => store.userSignup)
  const { loading, response, error } = userSignup

  // listen on change of the [loading, response, error] values
  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response && response.status == 'success') {
      // user successfully got registered
      props.history.push('/signin')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    // console.log('first name: ', firstName)
    // console.log('last name: ', lastName)
    // console.log('email: ', email)
    // console.log('password: ', password)
    dispatch(signup(firstName, lastName, email, password))
  }

  return (
    <div>
      <Header title="Signup" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            className="form-control"></input>
        </div>
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
            type="password"
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <button onClick={onSignup} className="btn btn-success">
            Singup
          </button>
          <div className="float-end">
            Existing user? <Link to="/signin">Signin here</Link>
          </div>
        </div>
      </div>

      {userSignup.loading && <div>waiting for result</div>}
    </div>
  )
}

export default SignupScreen
