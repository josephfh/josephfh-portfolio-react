import React from "react";
import {useTranslation} from "react-i18next";
import "./app.css";
import Header from "./Header";
import logo from "./logo.svg";
import Button from "./components/Button";
import Slider from "./components/Slider";
import InlineSVG from "svg-inline-react";

// // use hoc for class based components
// class LegacyWelcomeClass extends Component {
//   render() {
//     const { t, i18n } = this.props;
//     return <h2>{t('title')}</h2>;
//   }
// }
// const Welcome = withTranslation()(LegacyWelcomeClass);
// page uses the hook
function Page() {
  const {t, i18n} = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    document.activeElement.blur();
  };

  const icons = require("material-design-icons-svg")({
    emoticon: require("material-design-icons-svg/paths/emoticon-neutral"),
    menu: require("material-design-icons-svg/paths/menu"),
  });

  const svgEmoticon = icons.getSVG("emoticon");

  const emojiStyle = {
    filter: "brightness(0.83) contrast(16) saturate(0)",
    textShadow: "0px 3px black",
  };

  return (
    <div className="App">
      <Header />
      <img src={logo} className="h-24 w-24" alt="logo" />
      <div className="bottom-0 fixed right-0">
        <div className="flex">
          <div>{t("change")}</div>
          <Button
            onClick={() => changeLanguage("sv")}
            label="sv"
            active={i18n.languages[0] === "sv"}
          />
          <Button
            onClick={() => changeLanguage("en")}
            label="en"
            active={i18n.languages[0] === "en"}
          />
        </div>
      </div>
      <Slider />
      <div>{t("hello")}</div>
      <InlineSVG className="block h-8 w-8" src={svgEmoticon} />
      <div className="text-5xl" style={emojiStyle}>
        <span role="img" aria-label="Unimpressed face">
          &#128530;
        </span>
        <span role="img" aria-label="Unimpressed face">
          &#128578;
        </span>
        <span role="img" aria-label="Unimpressed face">
          &#129300;
        </span>
        <span role="img" aria-label="Unimpressed face">
          &#129320;
        </span>
        <span role="img" aria-label="Unimpressed face">
          &#129488;
        </span>
      </div>
    </div>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return <Page />;
}
