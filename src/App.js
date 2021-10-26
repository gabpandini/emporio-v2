import './App.css';
import { List, Create } from './components/Beer';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home'
import { Menu } from './components/Shared/Menu'

function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
        <Menu/>
        <Container>
          <Row>
            <Col>
              <h1>Cervejas 🍻</h1>
              <Switch>
                <Route component={Home} path="/" exact />
                <Route component={List} path="/beers" exact />
                <Route path="/beers/create">
                  <Create />
                </Route>
                <Route path="*">
                  <h4>Página não encontrada</h4>
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
