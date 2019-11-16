import React from "react";

class Slider extends React.Component {
  render() {
    return <input className="w-full" type="range" min="1" max="5" />;
  }
}

export default Slider;
