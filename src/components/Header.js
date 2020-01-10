import React, {Component} from "react";
import {CSSTransition} from "react-transition-group";

class Button extends Component {
  state = {
    showHeader: true,
  };

  switch = () => {
    this.setState(prevState => ({
      showHeader: !prevState.showHeader,
    }));
  };

  render() {
    return (
      <CSSTransition
        in={this.state.showHeader}
        timeout={0}
        classNames="header"
        unmountOnExit
        appear
        onEntered={this.showHeader}
        onExit={this.showHeader}
      >
        <div>
          <header
            className={
              "c-header pt-16" +
              (this.props.lang === "sv" ? " c-header--right" : " c-header--left")
            }
          >
            <h1 className="title">
              <span className="sm:block">Joseph</span>{" "}
              <span className="sm:block">Hughes</span>
            </h1>
            <h2 className="subtitle">{this.props.subtitle}</h2>
          </header>
        </div>
      </CSSTransition>
    );
  }
}

export default Button;
