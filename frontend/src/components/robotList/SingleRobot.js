import React, { useContext } from "react";
import { Col, Button, Badge } from "antd";
import { CartContext } from "../../contexts/CartContext";
import { ToDateTime, ThaiBahtAmountFormat } from "../../utils/Helpers";
import { ErrorNotificationMsg } from "../../utils/NotificationHelper";

const SingleRobot = ({ product }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const increaseItem = () => {
    increase(product);
  };

  const addMoreItem = () => {
    if (cartItems.length >= 5) {
      ErrorNotificationMsg("You can add up to 5 different robots to cart.");
    } else {
      addProduct(product);
    }
  };

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.name === product.name);
  };

  return (
    <Col xs={24} sm={12} md={8} lg={24} key={product.name}>
      <div className="prowrap">
        <div className="imagdiv">
          <img alt={product.name} src={product.image}></img>
        </div>
        <div className="Description">
          <h3>{product.name}</h3>
          <p>
            <label>Material :</label>{" "}
            <Badge
              style={{ backgroundColor: "#52c41a" }}
              count={product.material}
            ></Badge>
          </p>
          <p>
            <label>Stock :</label> {product.stock}
          </p>
          <p>
            <label>Created Date :</label> {ToDateTime(product.createdAt)}
          </p>
        </div>
        <div className="price_compare_wrap">
          <div className="price">{ThaiBahtAmountFormat(product.price)}</div>
          <div className="compare">
            {isInCart(product) && (
              <Button
                onClick={() => increaseItem(product)}
                type="primary"
                htmlType="button"
                disabled={product.stock > 0 ? false : true}
              >
                Add More
              </Button>
            )}

            {!isInCart(product) && (
              <Button
                onClick={() => addMoreItem(product)}
                type="primary"
                htmlType="button"
                disabled={product.stock > 0 ? false : true}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleRobot;
