import {
    Routes,
    Route
} from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";

const Navigation = () => {
    return <Routes>
        <Route
            path="/"
            element={<HomePage/>}
        />
        <Route
            path="/about"
            element={<AboutPage/>}
        />
        <Route
            path="/contact"
            element={<ContactPage/>}
        />
    </Routes>;
};
export default Navigation;
