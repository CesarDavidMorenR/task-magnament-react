import React from 'react';
import { Header } from './components/Header.js'
import { Form } from './components/Form.js';
import { Footer } from './components/Footer.js'
import { Sections } from './components/Sections.js'
// import './App.css';

function App() {
  return (
    <div className="App">
      <section className="mainCointainer">
        <Header />
           <Form />
           <Sections title='Todo' />
           <Sections title='Done' />
      </section>
      <Footer />
    </div>
  );
}

export default App;
