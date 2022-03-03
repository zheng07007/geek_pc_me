import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Layout/index'
import Login from './pages/Login/index'

function App() {
  return (
    <Switch>
      <Redirect from={'/'} to={'/home'} exact />
      <Route path={'/home'} component={Home} />
      <Route path={'/login'} component={Login} />
    </Switch>
  )
}

export default App
