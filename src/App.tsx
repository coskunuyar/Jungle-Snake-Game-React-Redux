import React from 'react';
import Game from './components/Game/Game';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Game/>
        <ToastContainer autoClose={2000} />
      </React.Fragment>
    );
  }
}

export default App;