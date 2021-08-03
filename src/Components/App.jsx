import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Organisms/Menu';
import Admin from './Pages/Admin';
import Forms from './Pages/Forms';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

const App = () => (
  <Router>
    <Menu />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/Administracion" component={Admin} />
      <Route path="/Formulario" component={Forms} />
      <Route path="/Perfil" component={Profile} />
    </Switch>
  </Router>
)

export default App;
