import React from "react";
import PropTypes from "prop-types";

class Slider extends React.Component {
  static propTypes = {
    setInterestLevel: PropTypes.func,
  };

  handleChange = event => {
    this.props.setInterestLevel(event.target.value);
  };

  render() {
    return (
      <input
        className="w-full"
        type="range"
        min="0"
        max="4"
        onChange={this.handleChange}
        value={this.props.interestLevel}
      />
    );
  }
}

export default Slider;
