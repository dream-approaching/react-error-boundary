import React from "react";

class ChildChild extends React.Component {
  // componentWillMount() {
  //   throw new Error("11");
  // }
  render() {
    const { value } = this.props;
    return (
      <div>
        这是子组件页面<br />
        <input value={value} />
      </div>
    );
  }
}

export default ChildChild;
