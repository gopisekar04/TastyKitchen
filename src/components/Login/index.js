/* eslint-disable camelcase */
import './index.css'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'

export default function Login() {
  const history = useHistory()
  useEffect(() => {
    const jwt_token = Cookies.get('jwt_token')
    if (jwt_token) {
      history.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="container sm-login-container">
        <img
          alt=""
          src="https://res.cloudinary.com/dshkviape/image/upload/v1719377648/tasty-kitchen/trvttw9r5pfwibpsbzyc.jpg"
          className="login-sm-img"
        />
        <div>
          <LoginForm />
        </div>
      </div>
      <div className="lg-login-container">
        <div
          style={{
            width: ' 50vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="lg-login-card-container">
            <LoginForm />
          </div>
        </div>
        <div className="lg-login-img-container">
          <img
            alt=""
            src="https://res.cloudinary.com/dshkviape/image/upload/v1719377648/tasty-kitchen/trvttw9r5pfwibpsbzyc.jpg"
            className="login-lg-img"
          />
        </div>
      </div>
    </div>
  )
}

export function LabeledInput({labelText, type, onChange}) {
  return (
    <div className="label-input-container">
      <label htmlFor={labelText}>{labelText}</label>
      <input onChange={onChange} id={labelText} type={type} />
    </div>
  )
}

export function LoginForm() {
  const history = useHistory()

  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    })
    const jsonData = await res.json()

    if (res.ok) {
      // eslint-disable-next-line camelcase
      const {jwt_token} = jsonData
      Cookies.set('jwt_token', jwt_token)
      history.replace('/')
    } else {
      // eslint-disable-next-line camelcase
      const {error_msg} = jsonData
      setError(error_msg)
    }
  }

  return (
    <form>
      <h1 className="login-title">Login</h1>
      <LabeledInput
        labelText="USERNAME"
        type="text"
        onChange={e => {
          setLoginDetails({
            ...loginDetails,
            username: e.target.value,
          })
        }}
      />
      <LabeledInput
        labelText="PASSWORD"
        type="password"
        onChange={e => {
          setLoginDetails({
            ...loginDetails,
            password: e.target.value,
          })
        }}
      />
      {error && <p className="error">{error}</p>}
      <button type="button" className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </form>
  )
}
