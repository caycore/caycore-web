import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    containerFix: {
        backgroundColor: "#e3e3e3",
        height: "100%"
    },
    container: {
        justifyContent: "center",
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "none",
        minHeight: "100%",
        display: "flex",
        padding: "40px",
        height: "auto",
        width: "100%",
        "@media screen and (max-width: 800px)": {
            height: "auto"
        }
    },
    contentContainer: {
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "90%",
        display: "flex",
        gap: "20px",
        "@media screen and (max-width: 800px)": {
            justifyContent: "center",
            flexDirection: "column"
        }
    },
    title: {
        fontFamily: "inter-bold",
        marginBottom: "40px",
        fontSize: "34px",
        color: "#212121"
    },
    row: {
        boxSizing: "border-box",
        borderRadius: "10px",
        flexDirection: "row",
        display: "flex",
        height: "100%",
        width: "100%",
        gap: "20px",
        "@media screen and (max-width: 950px)": {
            flexDirection: "column"
        }
    }
}, {
    name: "Page-About"
});
export default useStyles;
