import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        gap: "20px"
    },
    contentContainer: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        "& span:nth-child(1)": {
            fontFamily: "inter-bold",
            marginBottom: "10px",
            fontSize: "24px"
        },
        "& span:nth-child(2)": {
            fontFamily: "inter-medium",
            fontSize: "18px",
            color: "#737373"
        }
    },
    photo: {
        borderRadius: "50%",
        height: "150px",
        width: "150px"
    }
}, {
    name: "Broadcaster-Component"
});
export default useStyles;
