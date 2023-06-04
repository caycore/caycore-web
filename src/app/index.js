import {
    NCoreProvider
} from "ncore-web";
import themes from "./themes";
import locales from "./locales";
import useStyles from "./stylesheet";
import Navigation from "./navigation";
import {
    Header
} from "./components";

const App = () => {
    useStyles();

    return <div>
        <Header/>
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
