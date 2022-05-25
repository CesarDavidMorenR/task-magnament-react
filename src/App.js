import React from 'react';
import { Header } from './components/Header.js'
import { Form } from './components/Form.js';
import {Footer } from './components/Footer.js'
// import './App.css';

function App() {
  return (
    <div className="App">
        <section className="mainCointainer">
           <Header />
           <Form />
           <Footer />
         </section>
    </div>
  )
}

export default App;
