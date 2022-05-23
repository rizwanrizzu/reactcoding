import React from "react";
import styles from "./task.module.css";
import counter from "../counter/counter"

const Task = () => {

  const data = 



  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    {data.map((elem)=>{
      rturn (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
        {elem.text}
      </div>
      {/* Counter here */}
      <counter/>
      <button data-cy="task-remove-button"></button>
    </li>
      )
    })}
    </>
  );
};

export default Task;
