import React from "react";

export const States = ({ title, task, style }) => {
  
  
  return (
    <div className={style}>
      <h1>{title}</h1>
      <div className="whiteSpace"></div>
      <section>{ task}</section>
    </div>
  );
};
