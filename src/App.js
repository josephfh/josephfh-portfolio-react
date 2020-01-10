import "./app.css";
import {withTranslation} from "react-i18next";
import Button from "./components/Button";
import Header from "./components/Header";
import GoogleFontLoader from "react-google-font-loader";
import PropTypes from "prop-types";
import React from "react";

class App extends React.Component {
  // state = {
  //   mounted: false,
  // };

  // componentDidMount() {
  //   setTimeout(this.setState({mounted: true}), 2000);
  // }

  // useEffect(() => {
  //   setTimeout(this.setState({mounted: true}), 2000);
  // // }, [])
  // useEffect() {
  //   this.setState({mounted: true});
  // }

  static propTypes = {
    match: PropTypes.object,
  };

  changeLanguage = (i18n, lng) => {
    i18n.changeLanguage(lng);
    document.activeElement.blur();
  };

  render() {
    const {t, i18n} = this.props;
    return (
      <div>
        <Header lang={i18n.languages[0]} subtitle={t("frontend-developer")} />
        <div
          className={
            "c-content" +
            (i18n.languages[0] === "sv" ? " c-content--left" : " c-content--right")
          }
        >
          <div className="sm:flex sm:flex-col sm:justify-center sm:align-middle sm:h-screen sm:mt-12 px-8 sm:px-0 sm:max-w-lg">
            <div className="mb-4">{t("about")}</div>
            <div className="mb-4">{t("more-info")}</div>
            <div className="flex mb-4 pt-2 justify-center sm:justify-start">
              <h3 className="hidden">Links</h3>
              <Button
                classes="c-button--vivid mx-2 sm:mx-0 sm:mr-4"
                label="LinkedIn"
                href="https://www.linkedin.com/in/josephfitzhughes"
                aria-label="Joseph's LinkedIn profile"
              />
              <Button
                classes="c-button--vivid mx-2 sm:mx-0 sm:mr-4"
                label="GitHub"
                href="https://github.com/josephfh"
                aria-label="Joseph's Github"
              />
              <Button
                classes="c-button--vivid mx-2 sm:mx-0"
                label="Email"
                href="mailto:josephhughes@gmail.com"
                aria-label="Send an email"
              />
            </div>
          </div>
        </div>
        <div
          className={
            "c-bg " + (i18n.languages[0] === "sv" ? " c-bg--left" : " c-bg--right")
          }
        />
        <div className="top-0 sm:top-auto sm:bottom-0 fixed left-0 w-full z-30">
          <div className="align-middle flex justify-center">
            <h3 className="hidden">{t("change")}</h3>
            <Button
              classes="c-button--nav mr-1"
              isActive={i18n.languages[0] === "en"}
              label={t("en")}
              onClick={() => this.changeLanguage(i18n, "en")}
            />
            <Button
              classes="c-button--nav ml-1"
              isActive={i18n.languages[0] === "sv"}
              label={t("sv")}
              onClick={() => this.changeLanguage(i18n, "sv")}
            />
          </div>
        </div>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [900],
            },
            {
              font: "Roboto Mono",
              weights: [400],
            },
          ]}
        />
      </div>
    );
  }
}

export default withTranslation()(App);
