import React from "react";
import {
    Footer
} from "../../components";

const Contact = ({
    isMainFooterVisible
}) => {
    return <div>
        Welcome to Contact Page.
        <Footer
            isVisible={!isMainFooterVisible}
            isSticky={false}
        />
    </div>;
};
export default Contact;
