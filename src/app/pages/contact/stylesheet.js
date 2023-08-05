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
        alignItems: "flex-start",
        flexDirection: "row",
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
    image: {
        borderRadius: "30px",
        width: "40%",
        "@media screen and (max-width: 800px)": {
            width: "100%"
        }
    },
    formContainer: {
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        width: "100%",
        gap: "20px"
    },
    send: {
        marginTop: "10px"
    }
}, {
    name: "Page-Contact"
});
export default useStyles;
