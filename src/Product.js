import React from 'react';
import './Product.css';
const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>Title</p>
        <p className="product__price">
            <small>$</small>
            <strong>30</strong>
        </p>
        <div className="product__rating">⭐⭐⭐</div>
        {/* <img
          src="https://www.alibaba.com/product-detail/Alibaba-website-non-woven-fabric-shopping_60319583778.html#"
          alt="product-image"
        /> */}
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
