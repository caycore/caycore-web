import React from "react";
import {
    useNCoreLocalization,
    useNCoreTheme,
    Button
} from "ncore-web";
import {
    useNavigate
} from "react-router-dom";
import useStyles from "./stylesheet";
import sideMenuController from "../sideMenu/events";

const Menu = ({
    data
}) => {
    const navigate = useNavigate();

    const {
        localize
    } = useNCoreLocalization();

    const {
        spaces,
        colors
    } = useNCoreTheme();

    const classes = useStyles({
        props: {
            spaces,
            colors
        }
    });

    const selectedPage = window.location.pathname;

    return <div
        className={classes.container}
    >
        <div
            className={classes.webAndDesktopContainer}
        >
            {
                data.map((item, index) => {
                    return <Button
                        key={`menu-item-${index}`}
                        variant="ghost"
                        color={selectedPage === item.key ? "primary" : "body"}
                        title={localize(item.titleLocalizationKey)}
                        onClick={() => {
                            navigate(item.path);
                        }}
                        style={{
                            padding: spaces.container / 4
                        }}
                        className={classes.button}
                    />;
                })
            }
        </div>
        <div
            className={classes.mobileContainer}
            onClick={() => {
                sideMenuController.emit("setIsActive");
            }}
        >
            <i className="fas fa-bars fa-xl"></i>
        </div>
    </div>;
};
export default Menu;
