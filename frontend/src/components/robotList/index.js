import React, { Component } from "react";
import { Col, Row, Select } from "antd";
import { ErrorNotificationMsg } from "../../utils/NotificationHelper";

import SingleRobot from "./SingleRobot";
import FilterRobot from "./FilterRobot";
import Cart from "../cart";

const { Option } = Select;
export class RobotList extends Component {
  state = {
    loading: false,
    productArr: [],
    filteredRobotArr: [],
    materialOptionArr: [],
    selectedMaterial: [],
  };

  componentDidMount() {
    this.getRobotList();
  }

  getRobotList = () => {
    this.setState({ loading: true });
    fetch("http://localhost:8000/api/robots", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let productList = data.data;
        if (productList.length > 0) {
          this.setState({
            productArr: productList,
            filteredRobotArr: productList,
            loading: false,
          });
        } else {
          this.setState({ loading: false });
        }
        this.getMaterialOptions(productList);
      })
      .catch((error) => {
        ErrorNotificationMsg("Failed to fetch data.");
        this.setState({ loading: false });
      });
  };

  handleMaterialSelectChange = (value) => {
    this.setState({ selectedMaterial: value });
  };

  getMaterialOptions = (productListArr) => {
    let materialOptionArr = new Set();
    productListArr.forEach((robot) => {
      materialOptionArr.add(robot.material);
    });

    let materialOptions = [];
    materialOptionArr.forEach((material) => {
      materialOptions.push(<Option key={material}>{material}</Option>);
    });
    this.setState({ materialOptionArr: materialOptions });
  };

  filterRobot = () => {
    let result = [];
    if (this.state.selectedMaterial.length > 0) {
      this.state.selectedMaterial.forEach((item) => {
        let items = this.state.productArr.filter(
          (array) => array.material === item
        );
        result = [...result, ...items];
      });
      this.setState({ filteredRobotArr: result });
    } else {
      this.setState({ filteredRobotArr: this.state.productArr });
    }
  };

  render() {
    const { filteredRobotArr, materialOptionArr, loading } = this.state;
    return (
      <div className="container">
        <div className="productPage">
          <div className="heading">
            <div className="title">Robot List</div>
            <FilterRobot
              handleMaterialSelectChange={this.handleMaterialSelectChange}
              filterRobot={this.filterRobot}
              materialOptionArr={materialOptionArr}
            />
          </div>
          <Row
            gutter={{ xs: 8, sm: 16, md: 16, lg: 32 }}
            className="product-list"
          >
            <Col xs={18} sm={18} md={18}>
              <Row
                gutter={{ xs: 8, sm: 16, md: 16, lg: 32 }}               
              >
                {filteredRobotArr.length > 0 ? (
                  filteredRobotArr.map((robot, index) => {
                    return (
                      <SingleRobot
                        product={robot}
                        addToCart={() => this.addToCart}
                        key={robot.name}
                      />
                    );
                  })
                ) : filteredRobotArr.length === 0 && loading === false ? (
                  <Col xs={24} sm={24} md={24}>
                    <div className="not-found">Not found robot</div>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <Cart />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RobotList;
