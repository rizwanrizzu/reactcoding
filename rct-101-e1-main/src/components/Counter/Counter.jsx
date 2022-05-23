import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={(e)=>setCount(count+1)}>+</button>
      <span data-cy="task-counter-value">&nbsp;{count} &nbsp;</span>
      <button data-cy="task-counter-decrement-button" onClick={(e)=>(count>0)? setCount(count-1):0}></button>
    </div>
  );
};

export default Counter;
