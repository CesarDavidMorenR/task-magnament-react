import './App.css';

function App() {
  return (
    <div className="App">
        <section className="mainCointainer">
      <header className="mainHeader">
         <h1>ToDoApp</h1>
         <p>Aplication for task management</p>
      </header>
         <section className="mainBody">
            <form className="mainForm">
               <section className="titleComponent">Create</section>
               <div className="whiteSpace"></div>
               <section className="createComponent">
                  <section className="createComponent__info">
                     <div> 
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title" />
                     </div>

                     <div>
                        <label for="tags">Tags</label>
                        <input type="text" name="tags" id="tags" />
                     </div>
                  </section>
                  <div class="descriptionForm">
                     <div>
                        <label for="description">Description</label>
                        <input type="text" name="description" id="description" />
                     </div>
                     <input type="button" value="submit" id="submit" />
                  </div>
               </section>
          </form>
        </section> 
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
