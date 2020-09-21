import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { Switch } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";

const content = {
  english: {
    search: "Search",
    flag: "🇺🇸",
  },
  hungarian: {
    search: "Keresés",
    flag: "🇭🇺",
  },
};

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    // const isDarkMode = this.context.isDarkmode stb
    const { isDarkMode, toggleTheme } = this.context;
    const { language } = this.props.languageContext;
    /*
      const {search: "Kereses", flag: "HU"} = content["hungarian"]
    */
    const { classes } = this.props;
    const { search, flag } = content[language];
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton}>
              <span>{flag}</span>
            </IconButton>
            <Typography variant="h6" className={classes.title} color="inherit">
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={search + "..."}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
