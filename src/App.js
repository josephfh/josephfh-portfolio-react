import React from "react";
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next";
import InlineSVG from "svg-inline-react";
import "./app.css";
import Header from "./Header";
import logo from "./logo.svg";
import Button from "./components/Button";
import Router from "./components/Router";
import Slider from "./components/Slider";

class App extends React.Component {
  state = {
    interestLevel: 1,
  };

  static propTypes = {
    match: PropTypes.object,
  };

  icons = require("material-design-icons-svg")({
    emoticon: require("material-design-icons-svg/paths/emoticon-neutral"),
    menu: require("material-design-icons-svg/paths/menu"),
  });

  svgEmoticon = this.icons.getSVG("emoticon");

  emojiStyle = {
    filter: "brightness(0.83) contrast(16) saturate(0)",
    textShadow: "0px 3px black",
  };

  changeLanguage = (i18n, lng) => {
    i18n.changeLanguage(lng);
    document.activeElement.blur();
  };

  setInterestLevel = interestLevel => {
    console.log(interestLevel);
    this.setState({interestLevel});
  };

  faces = [
    {
      emoji: "😒",
      label: "ZZZ face",
    },
    {
      emoji: "🙂",
      label: "ZZZ face",
    },
    {
      emoji: "🤨",
      label: "ZZZ face",
    },
    {
      emoji: "🤔",
      label: "ZZZ face",
    },
    {
      emoji: "🧐",
      label: "ZZZ face",
    },
  ];

  render() {
    const {t, i18n} = this.props;
    return (
      <div className="App">
        <Header />
        <img src={logo} className="h-24 w-24" alt="logo" />
        <div className="bottom-0 fixed right-0">
          <div className="flex">
            <div>{t("change")}</div>
            <Button
              onClick={() => this.changeLanguage(i18n, "sv")}
              label="sv"
              isActive={i18n.languages[0] === "sv"}
            />
            <Button
              onClick={() => this.changeLanguage(i18n, "en")}
              label="en"
              isActive={i18n.languages[0] === "en"}
            />
          </div>
        </div>
        <Slider
          interestLevel={this.state.interestLevel}
          setInterestLevel={this.setInterestLevel}
        />
        <div>{t("hello")}</div>
        {/* <InlineSVG className="block h-8 w-8" src={this.svgEmoticon} /> */}
        <div className="text-5xl" style={this.emojiStyle}>
          <span role="img" aria-label={this.faces[this.state.interestLevel].label}>
            {this.faces[this.state.interestLevel].emoji}
          </span>
        </div>
      </div>
    );
  }
}

export default withTranslation()(App);
