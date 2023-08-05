import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        backgroundColor: "#e3e3e3",
        justifyContent: "center",
        flexDirection: "column",
        boxSizing: "border-box",
        alignItems: "center",
        userSelect: "none",
        display: "flex",
        padding: "40px",
        height: "75%",
        width: "100%",
        "@media screen and (max-width: 800px)": {
            height: "auto"
        }
    },
    title: {
        fontFamily: "inter-bold",
        marginBottom: "40px",
        color: "#212121",
        fontSize: "34px"
    },
    contentContainer: {
        justifyContent: "space-between",
        fontFamily: "inter-regular",
        alignItems: "center",
        flexDirection: "row",
        maxWidth: "90%",
        display: "flex",
        gap: "20px",
        "& p": {
            textAlign: "justify"
        },
        "@media screen and (max-width: 800px)": {
            justifyContent: "center",
            flexDirection: "column"
        }
    },
    loading: {
        height: 40,
        width: 40
    }
}, {
    name: "Broadcasters-Section"
});
export default useStyles;
