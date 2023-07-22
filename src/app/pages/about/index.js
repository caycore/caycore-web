import React from "react";
import {
    Footer
} from "../../components";

const About = ({
    isMainFooterVisible
}) => {
    return <div>
        Welcome to About Page.
        <Footer
            isVisible={!isMainFooterVisible}
            isSticky={false}
        />
    </div>;
};
export default About;
