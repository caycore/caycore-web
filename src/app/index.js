import React, {
    useEffect,
    useState
} from "react";
import {
    NCoreProvider,
    useNCoreTheme
} from "ncore-web";
import themes from "./themes";
import locales from "./locales";
import designTokens from "./themes/designTokens";
import useStyles from "./stylesheet";
import Navigation from "./navigation";
import {
    Footer,
    Header
} from "./components";
import {
    MENU
} from "./constants";
import SideMenu from "./components/sideMenu";

const App = () => {
    const {
        colors
    } = useNCoreTheme();

    const [isMainFooterVisible, setIsMainFooterVisible] = useState(true);

    const classes = useStyles({
        theme: {
            aTagHoverColorKey: "primary",
            colors
        }
    });

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const onScroll = () => {
        setIsMainFooterVisible(window.scrollY < 10);
    };

    return <div
        className={classes.container}
    >
        <Header
            menuData={MENU}
        />
        <SideMenu
            data={MENU}
        />
        <Navigation
            isMainFooterVisible={isMainFooterVisible}
        />
        <Footer
            isVisible={isMainFooterVisible}
            isSticky={true}
        />
    </div>;
}

const ContextAPI = () => {
    return <NCoreProvider
        config={{
            designTokens,
            themes,
            locales
        }}
    >
        <App/>
    </NCoreProvider>;
};
export default ContextAPI;
