import React from 'react';

export const Form = () => {
  return (
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
  );
}