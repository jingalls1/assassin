import React from "react";

export default class Pic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Cell">
        <img
          src={this.props.number}
          alt="Smiley face"
          height="100"
          width="100"
        />
      </div>
    );
  }
}
