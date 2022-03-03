import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './pages/Layout/index'
import Login from './pages/Login/index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect from={'/'} to={'/login'} exact />
        <Route path={'/home'} component={Layout} />
        <Route path={'/login'} component={Login} />
      </Switch>
    </div>
  )
}

export default App
