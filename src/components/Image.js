import React, { useState } from "react"; 

const Image = ({ url, title }) => {

  const [selectedImg, setSelectedImg] = useState("");

  const openModal = ()=> {
    // console.log(selectedImg)
  }

  const updateSelcted = e => {
    let m = e.target.src.toString().match(/.*\/(.+?)\./);
    if (m && m.length > 1)
    {
      m = m[1];
    }else{
      m = '';
    }

    setSelectedImg( m )
    openModal()
  }

  return(
    <li>
    <div
      onClick = {updateSelcted}
    >
      <div>{ selectedImg }</div>
      <img src={url} alt={title} />
    </div>
  </li>
  );  
}

export default Image;
