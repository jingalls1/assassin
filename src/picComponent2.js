import React from "react";

export default class Pic2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Cell">
        <div className="deceased">
          <img
            src={this.props.number}
            alt="Smiley face"
            height="100"
            width="100"
          />
          <div className="deceasedText">DECEASED</div>
        </div>
      </div>
    );
  }
}
