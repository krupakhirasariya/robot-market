import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col } from "antd";

import "antd/dist/antd.css";
import "../../css/custom.scss";

const { Header, Content } = Layout;

const FrontLayout = (props) => {
  return (
    <Layout className="front">
      <Header>
        <div className="container">
          <Row justify="space-between">
            <Col className="logo">
              <Link to="/">Robot Market</Link>
            </Col>
            <Col align="end" className="rightside"></Col>
          </Row>
        </div>
      </Header>
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default FrontLayout;
