import React from "react";
import { Select, Button } from "antd";

const FilterRobot = (props) => {
  return (
    <div className="search-wrap">
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder="Please select"
        onChange={props.handleMaterialSelectChange}
      >
        {props.materialOptionArr}
      </Select>
      <Button
        onClick=""
        type="primary"
        htmlType="button"
        onClick={props.filterRobot}
        size="small"
      >
        Search
      </Button>
    </div>
  );
};

export default FilterRobot;
