import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    "@global": {
        "@keyframes nibgatLogo": {
            from: {
                transform: "rotateZ(0deg)"
            },
            to: {
                transform: "rotateZ(-360deg)"
            }
        }
    },
    container: {
        justifyContent: "space-between",
        fontFamily: "inter-regular",
        backgroundColor: "white",
        boxSizing: "border-box",
        flexDirection: "row",
        alignItems: "center",
        padding: "20px 30px",
        userSelect: "none",
        fontSize: "16px",
        width: "100%",
        bottom: 0,
        right: 0,
        left: 0
    },
    logo: {
        animation: "nibgatLogo 1s infinite linear",
        height: "50px"
    }
}, {
    name: "Footer-Component"
});
export default useStyles;
