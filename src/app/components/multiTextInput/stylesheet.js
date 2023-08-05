import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        display: "flex",
        width: "100%"
    },
    label: {
        fontFamily: "inter-semibold",
        marginBottom: "10px",
        textAlign: "left",
        fontSize: "20px",
        width: "100%"
    },
    input: {
        fontFamily: "inter-regular",
        border: "2px solid white",
        borderRadius: "10px",
        alignSelf: "stretch",
        minHeight: "150px",
        resize: "vertical",
        fontSize: "18px",
        outline: "none",
        padding: "20px",
        "&:focus": {
            border: "2px solid #FF001F",
            outline: "none"
        }
    }
}, {
    name: "Component-Text-Input"
});
export default useStyles;
