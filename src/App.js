import React from "react";
import { deltPics } from "./pics.js";
import Pic from "./picComponent.js";
import Pic2 from "./picComponent2.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  currentDay = () => {
    let d = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      <span>
        {months[d.getMonth()]} {d.getDate()}
      </span>
    );
  };

  render() {
    return (
      <div className="App">
        <h1>ACTIVE CONTRACTS {this.currentDay()}</h1>
        <div className="Table">
          <div className="Row">
            <Pic2 number={deltPics[0]} />
            <Pic2 number={deltPics[1]} />
            <Pic2 number={deltPics[2]} />

          </div>
          <div className="Row">
            <Pic2 number={deltPics[3]} />
            <Pic2 number={deltPics[4]} />
            <Pic number={deltPics[5]} />

          </div>
          <div className="Row">
            <Pic2 number={deltPics[6]} />
            <Pic number={deltPics[7]} />
            <Pic number={deltPics[8]} />

          </div>
          <div className="Row">
            <Pic2 number={deltPics[9]} />
            <Pic2 number={deltPics[10]} />
            <Pic number={deltPics[11]} />

          </div>
          <div className="Row">
            <Pic2 number={deltPics[12]} />
            <Pic number={deltPics[13]} />
            <Pic2 number={deltPics[14]} />

          </div>
          <div className="Row">
            <Pic number={deltPics[15]} />
            <Pic2 number={deltPics[16]} />
            <Pic number={deltPics[17]} />

          </div>
          <div className="Row">
            <Pic2 number={deltPics[18]} />
            <Pic2 number={deltPics[19]} />
            <Pic2 number={deltPics[20]} />
          </div>
          <div className="Row">
            <Pic2 number={deltPics[21]} />
            <Pic number={deltPics[22]} />
            <Pic2 number={deltPics[23]} />
          </div>
        </div>
      </div>
    );
  }
}
