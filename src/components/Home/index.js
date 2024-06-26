/* eslint-disable camelcase */
import './index.css'
import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

export default function Home() {
  const history = useHistory()

  useEffect(() => {
    const jwt_token = Cookies.get('jwt_token')
    if (!jwt_token) {
      history.replace('/login')
    }
  })

  useEffect(() => {
    const fetchDeals = async () => {
      const url = 'https://apis.ccbp.in/restaurants-list/offers'

      const res = await fetch(url, {
        method: 'GET',
        'Content-Type': 'application/json',
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt_token')}`,
        },
      })
      const jsonData = await res.json()
      console.log(jsonData)
    }

    // fetchDeals()
  })

  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  )
}
