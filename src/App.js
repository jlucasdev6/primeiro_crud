import React from 'react';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
          <h1>Minha aplicação React</h1>
      <BrowserRouter>

        <Nav variant='tab'>
          <Nav.Link as={Link} to="/">Início</Nav.Link>
          <Nav.Link as={Link} to="/Alunos">Cadastro</Nav.Link>
          <Nav.Link as={Link} to="/Sobre">Sobre</Nav.Link>
        </Nav>

      <Switch>
          <Route path='/' exact={true} component={Home}></Route>
          <Route path='/Alunos' component={Alunos}></Route>
          <Route path='/Sobre' component={Sobre}></Route>
      </Switch>

        </BrowserRouter>
  </div>
  );
}

export default App;