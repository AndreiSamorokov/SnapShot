import React from "react";

const Image = ({ url, title }) => (
  <li>
    <a href={url}>
      <img src={url} alt={title} />
    </a>
  </li>
);

export default Image;
