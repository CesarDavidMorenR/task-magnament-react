import React from 'react';
import { Header } from './components/Header.js'
import { Form } from './components/Form.js';
// import './App.css';

function App() {
  return (
    <div className="App">
        <section className="mainCointainer">
           <Header />
           <Form />
            <table>
                  <thead>
                     <tr>
                        <td colspan="3" class="borde">TO-DO</td>
                     </tr>
                  </thead>
                <tbody>
                     <tr>
                     <tr>
                        <td>Creacion del header</td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                     </tr>
                     <tr>
                     <tr>
                        <td>Call-To-Action para Home</td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                     </tr>
                     <tr>
                     <tr>
                        <td>Creaación de las tablas en la BD</td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                     </tr>
                    </tbody>
            </table>
         </section>
        
        <section>
               <br />
               <table>
                  <thead>
                     <tr>
                        <td colspan="3" class="borde">DONE</td>
                     </tr>
                  </thead>
              <tbody>
                     <tr>
                     <tr>
                        <td>Componente Card</td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                     </tr>
                     <tr>
                     <tr>
                        <td>Imágemes profile</td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                     </tr>
                </tr>
                </tbody>
               </table>
         </section>
         
        <footer class="mainFooter">
        <p>All rights reserved (Develop on 2022). Make by David Moreno with HTML, CSS, and JavaScript</p>
         {/* <!-- Hecho el Jueves 10/02/2022--> */}
         </footer>
    </div>
  )
}

export default App;
