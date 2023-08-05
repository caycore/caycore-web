import {
    createUseStyles
} from "react-jss";
import {
    clickEvent
} from "../../themes/helpers";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        width: "100%"
    },
    contentContainer: {
        justifyContent: "space-between",
        display: "flex",
        width: "100%",
        padding: 10
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        userSelect: "none",
        display: "flex",
        gap: 10,
        ...clickEvent()
    },
    logo: {
        borderRadius: "50%",
        height: 65,
        width: 65
    },
    siteDescriptionContainer: {
        flexDirection: "column",
        display: "flex",
        gap: 4,
        "& span:nth-child(1)": {
            fontFamily: "inter-semibold",
            fontSize: 22
        },
        "& span:nth-child(2)": {
            fontFamily: "inter-regular",
            fontSize: 18
        }
    }
}, {
    name: "Header-Component"
});
export default useStyles;
