import {
    NCoreProvider, useNCoreTheme
} from "ncore-web";
import themes from "./themes";
import locales from "./locales";
import useStyles from "./stylesheet";
import Navigation from "./navigation";
import {
    Header
} from "./components";
import { MENU } from "./constants";
import SideMenu from "./components/sideMenu";

const App = () => {
    const {
        colors
    } = useNCoreTheme();

    useStyles({
        theme: {
            aTagHoverColorKey: "primary",
            colors
        }
    });

    return <div>
        <Header
            menuData={MENU}
        />
        <SideMenu
            data={MENU}
        />
        <Navigation/>
    </div>;
}

const ContextAPI = () => {
    return <NCoreProvider
        config={{
            themes,
            locales
        }}
    >
        <App/>
    </NCoreProvider>;
};
export default ContextAPI;
