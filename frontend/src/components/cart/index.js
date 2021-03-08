import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Space, Modal } from "antd";

import { CartContext } from "../../contexts/CartContext";
import { ThaiBahtAmountFormat } from "../../utils/Helpers";

import CartProducts from "./CartProducts";
const Cart = () => {
  const { total, cartItems, itemCount, clearCart } = useContext(CartContext);

  return (
    <>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={24}>
          {cartItems.length > 0 ? <CartProducts /> : <p>Your cart is empty</p>}
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="cart-price-detail">
            <h4>Total Products : {itemCount}</h4>
            <h4>Total Payment Amount : {ThaiBahtAmountFormat(total)}</h4>
            <hr />
            <div className="cart-btn-wrap">
              <Space>
                <Button type="primary" disabled>
                  CHECKOUT
                </Button>
                <Button type="primary" onClick={clearCart}>
                  CLEAR
                </Button>
              </Space>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
