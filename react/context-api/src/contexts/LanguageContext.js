import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "english" };
  }

  changeLanguage = (e) => {
    this.setState({ language: e.target.value });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

/*
  A Component parameterrel meghivodik a withLanguageContext fuggveny,
  es a visszatert komponenssel, meg 1x meghivodik a prop parameterekkel,
  igy az eredmeny az lesz, ami bele van irva tehat
    <Component languageContext={value} prop1, prop2,... />
*/
export const withLanguageContext = (Component) => (props) => (
  <LanguageContext.Consumer>
    {(value) => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);
