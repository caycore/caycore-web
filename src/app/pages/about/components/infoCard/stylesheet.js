import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        },
        "&:nth-child(1):hover > div": {
            transition: "transform 0.5s",
            transform: "translateX(0%)"
        },
        "&:nth-child(2):hover > div": {
            transition: "transform 0.5s",
            transform: "translateX(0%)"
        },
        "&:nth-child(1) > div": {
            transform: "translateX(-101%)",
            transition: "transform 0.5s"
        },
        "&:nth-child(2) > div": {
            transform: "translateX(101%)",
            transition: "transform 0.5s"
        },
        "& > div": {
            backgroundColor: "rgba(13, 13, 13, 0.5)",
            backdropFilter: "blur(4px)",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            borderRadius: "10px",
            position: "absolute",
            display: "flex",
            padding: "20px",
            bottom: 0,
            right: 0,
            left: 0,
            top: 0
        }
    },
    image: {
        borderRadius: "10px",
        height: "100%",
        width: "100%"
    },
    title: {
        fontFamily: "inter-semibold",
        marginBottom: "10px",
        fontSize: "22px",
        color: "#FF001F"
    },
    content: {
        fontFamily: "inter-regular",
        fontSize: "14px",
        color: "white"
    }
}, {
    name: "Component-Info-Card"
});
export default useStyles;
