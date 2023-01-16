import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="collection-2-item">
      <div className="item-img">
        <img src={img} alt="" />
      </div>
      <div className="item-info">
        <span className="name">{title}</span>
        <span className="price"> {price}Đ</span>
        <button onClick={() => handleClick(item)}>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
