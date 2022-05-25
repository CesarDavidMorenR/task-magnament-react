import React from "react";

export const Sections = ({ title, task }) => {
  
  
  return (
    <div>
      <h1>{title}</h1>
      <div className="whiteSpace"></div>
      <section>{ task}</section>
    </div>
  );
};
