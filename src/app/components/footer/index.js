import React from "react";
import useStyles from "./stylesheet";

const Footer = ({
    isSticky = false,
    isVisible,
}) => {
    const classes = useStyles();

    const fullYear = new Date().getFullYear();

    return <div
        className={classes.container}
        style={{
            position: isSticky ? "fixed" : "relative",
            display: isVisible ? "flex" : "none"
        }}
    >
        <img
            src="/assets/images/nlogo.png"
            className={classes.logo}
            alt="footer-logo"
        />
        <span>
            Telif Hakkı © {fullYear} - <b>NİBGAT® | Topluluk</b>
        </span>
    </div>;
};
export default Footer;
