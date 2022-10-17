import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import logo from "../images/toucan.png";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    maxWidth: "40px",
    marginLeft: -5
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "red",
      borderBottom: "3px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
       <Link href="/">
          <img src={logo} alt="logo" className={classes.logo} />
       </Link>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>Home</Link>
            <Link to="/about" className={classes.link}>About</Link>
            <Link to="/contact" className={classes.link}>Contact</Link>
            <Link to="/faq" className={classes.link}>FAQ</Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;