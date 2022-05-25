import React from 'react';
import { Header } from './components/Header.js'
import { Form } from './components/Form.js';
import { Footer } from './components/Footer.js'
import { States } from './components/States.js'
// import './App.css';

function App() {
   const todo = 'sd'
   const done = 'sfff'

  return (
    <div className="App">
      <section className="mainCointainer">
        <Header />
        <Form />
      </section>
      <section className="states">
        <States title="Todo" task={todo} style="cards" />
        <States title="Done" task={done}  style="cards" />
      </section>
      <Footer />
    </div>
  );
}

export default App;
