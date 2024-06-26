import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Restaurant from './components/Restaurant'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/restaurant/:id" component={Restaurant} />
    <Route exact path="/cart" component={Cart} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
