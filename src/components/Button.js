import React from "react";
import {ExternalLink} from "react-external-link";

class Button extends React.Component {
  render() {
    let classes = this.props.classes ? "c-button " + this.props.classes : "c-button";
    classes = this.props.isActive ? `${classes} c-button--active` : `${classes}`;
    return this.props.href ? (
      <ExternalLink className={classes} href={this.props.href}>
        {this.props.label}
      </ExternalLink>
    ) : (
      <button className={classes} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
