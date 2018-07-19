import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import characters from './characters.json';
import GameContainer from './components/GameContainer';
import {Grid,Jumbotron,Row,Col,Image,Button} from 'react-bootstrap/lib';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
             
        <Grid>
  <Row>
    {/* <Col xs={6} md={4}><Button>
      <Image src="./assets/images/2.jpg" thumbnail  /></Button>
    </Col>
    <Col xs={6} md={4}>
      <Image src="./assets/images/2.jpg" thumbnail  />
    </Col>
    <Col xs={6} md={4}>
      <Image src="./assets/images/2.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src="./assets/images/2.jpg" thumbnail  />
    </Col> */}
    <GameContainer/>
  </Row>
</Grid>;
      </div>
    );
  }
}

export default App;
