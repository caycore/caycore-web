import {
    createUseStyles
} from "react-jss";
import {
    clickEvent
} from "./themes/helpers";

const useStyles = createUseStyles((params) => {
    return {
        container: {
            backgroundColor: "#e3e3e3",
            height: "100%",
            width: "100%"
        },
        "@global": {
            "@font-face": [
                {
                    "fontFamily": "inter-regular",
                    "src": "url('/assets/fonts/Inter-Regular.ttf')"
                },
                {
                    "fontFamily": "inter-light",
                    "src": "url('/assets/fonts/Inter-Light.ttf')"
                },
                {
                    "fontFamily": "inter-semibold",
                    "src": "url('/assets/fonts/Inter-SemiBold.ttf')"
                },
                {
                    "fontFamily": "inter-bold",
                    "src": "url('/assets/fonts/Inter-Bold.ttf')"
                },
                {
                    "fontFamily": "inter-medium",
                    "src": "url('/assets/fonts/Inter-Medium.ttf')"
                }
            ],
            "a": {
                ...clickEvent(params)
            },
            ".seperator": {
                backgroundColor: params.colors.seperator,
                width: "100%",
                height: 1
            }
        }
    };
}, {
    name: "Global"
});
export default useStyles;
