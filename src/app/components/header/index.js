import {
    useNCoreLocalization,
    Button
} from "ncore-web";
import useStyles from "./stylesheet";
import {
    MENU
} from "../../constants";
import {
    useNavigate
} from "react-router-dom";

const Header = () => {
    const {
        activeLocale,
        switchLocale,
        localize
    } = useNCoreLocalization();

    const classes = useStyles();
    const navigate = useNavigate();

    return <div
        className={classes.container}
    >
        {
            MENU.map((item) => {
                return <Button
                    title={localize(item.key)}
                    variant={window.location.pathname === item.path ? "filled" : "outline"}
                    onClick={() => {
                        navigate(item.path);
                    }}
                />;
            })
        }
        <Button
            title={activeLocale}
            onClick={() => {
                switchLocale(activeLocale === "tr" ? "en" : "tr");
            }}
        />
    </div>;
};
export default Header;
