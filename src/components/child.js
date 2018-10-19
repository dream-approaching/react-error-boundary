import React from "react";
import ChildChild from "./childChild";

class Child extends React.Component {
  render() {
    return (
      <div>
        这是子组件页面
        <ChildChild value="这是子组件的子组件" />
      </div>
    );
  }
}

export default Child;
