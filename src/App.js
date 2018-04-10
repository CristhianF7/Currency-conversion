import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
