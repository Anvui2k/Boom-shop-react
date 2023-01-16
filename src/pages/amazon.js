import React, { useState } from "react";
import list from "./data";
import Cards from "./card";

const Amazon = ({ handleClick }) => {
  return (
    <section1>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section1>
  );
};

export default Amazon;
