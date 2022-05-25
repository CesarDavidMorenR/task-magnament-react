import React from 'react';
import { Header } from './components/Header.js'
import { Form } from './components/Form.js';
import { Footer } from './components/Footer.js'
import { Sections } from './components/Sections.js'
// import './App.css';

function App() {
   const todo = 'sd'
   const done = 'sfff'

  return (
    <div className="App">
      <section className="mainCointainer">
        <Header />
           <Form />
           <Sections title='Todo' task={ todo }/>
           <Sections title='Done' task= { done } />
      </section>
      <Footer />
    </div>
  );
}

export default App;
