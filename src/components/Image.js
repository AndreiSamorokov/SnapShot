import React, { useState } from "react";  

const Image = ({ url, title, onSelecImage }) => {
 

  const updateSelcted = e => {
    let m = e.target.src;
 
    onSelecImage(m);      
  }

  return(
    <li>
    <div
      onClick = {updateSelcted}
    > 
      <img src={url} alt={title} />
    </div>
  </li>
  );  
}

export default Image;
