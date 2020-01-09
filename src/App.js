import React from "react";
import {ExternalLink} from "react-external-link";
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next";
import InlineSVG from "svg-inline-react";
import "./app.css";
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
        <h1 class="leading-loose mx-auto text-5xl uppercase">Joseph Hughes</h1>
        <h2 class="leading-loose mx-auto text-3xl uppercase">
          {t("frontend-developer")}
        </h2>
        <img src={logo} className="h-24 w-24" alt="logo" />
        <div className="top-0 fixed left-0 w-full">
          <div className="align-middle flex justify-center">
            <h3 class="hidden">{t("change")}</h3>
            <Button
              onClick={() => this.changeLanguage(i18n, "en")}
              label={t("en")}
              isActive={i18n.languages[0] === "en"}
            />
            <Button
              onClick={() => this.changeLanguage(i18n, "sv")}
              label={t("sv")}
              isActive={i18n.languages[0] === "sv"}
            />
          </div>
        </div>
        <Slider
          interestLevel={this.state.interestLevel}
          setInterestLevel={this.setInterestLevel}
        />
        <ExternalLink
          href="https://www.linkedin.com/in/josephfitzhughes"
          aria-label="Joseph's LinkedIn profile"
        >
          <span>LinkedIn</span>
        </ExternalLink>
        <ExternalLink href="mailto:josephhughes@gmail.com" aria-label="Send an email">
          <span>Email</span>
        </ExternalLink>
        <ExternalLink href="https://github.com/josephfh" aria-label="Joseph's Github">
          <span>GitHub</span>
        </ExternalLink>
        <div>{t("about")}</div>
        <div>{t("more-info")}</div>
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
