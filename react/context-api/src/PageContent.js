import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default class PageContent extends Component {
  // itt kap a erteket a context, ami utan mar 'this.context' kulcsszoval hivatkozni is tudunk majd ra
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "black" : "white",  
      height: "100vh",
      width: "100vw",
    };
    /*
      A this.props.children azok a komponensek es elemek amiket korbeveszunk az adott komp. nyito es zaro tagjeivel
      <PageContent>
        <Pelda1> - props.children
        <Pelda2> - props.children
      </PageContent>
    */
    return <div style={styles}>{this.props.children}</div>;
  }
}
