import {
    useNCoreTheme
} from "ncore-web";
import useStyles from "./stylesheet";
import Menu from "../menu";

const Header = ({
    menuData
}) => {
    const {
        colors
    } = useNCoreTheme();

    const classes = useStyles();

    return <div
        className={classes.container}
    >
        <div
            className={classes.contentContainer}
            style={{
                backgroundColor: colors.layer1
            }}
        >
            <div
                className={classes.titleContainer}
                onClick={() => {
                    window.location.href = '/';
                }}
            >
                <img
                    src="./assets/images/logo.png"
                    className={classes.logo}
                    alt=""
                />
                <div
                    className={classes.siteDescriptionContainer}
                >
                    <span
                        style={{
                            color: colors.primary
                        }}
                    >
                        Çay Core
                    </span>
                    <span
                        style={{
                            color: colors.slogan
                        }}
                    >
                        Code demleyelim...
                    </span>
                </div>
            </div>
            <Menu
                data={menuData}
            />
        </div>
    </div>;
};
export default Header;
