import React from "react";
import { useState } from "react";
const Task = (props) =>{

    return(

<div className="task">
  <div className="upper">
        <h4>{props.date}</h4>
    <div className="tags">

      {props.tags.map(item => (
      <h4 className="tag">
      {item}
      </h4>
      ))}

    </div>
  </div>  
        <a href="">{props.name}</a>
        <p>{props.description}</p>
        <a href="">{props.user.email}</a>
</div>
      )
}

export default Task;