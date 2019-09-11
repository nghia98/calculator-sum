import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sum from './components/Sum';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Header />
        <Sum />
      </div>
    );
  }
}

export default App;
