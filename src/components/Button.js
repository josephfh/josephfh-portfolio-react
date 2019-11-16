import React from "react";

class Button extends React.Component {
  render() {
    const classes = "block border p-4 w-24";
    return (
      <button
        className={this.props.isActive ? `${classes} border-red-300` : `${classes}`}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
