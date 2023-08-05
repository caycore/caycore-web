import React, {
    useEffect,
    useState
} from "react";
import useStyles from "./stylesheet";

const Broadcaster = ({
    photoURL,
    fullName,
    job
}) => {
    const classes = useStyles();

    return <div
        className={classes.container}
    >
        <img
            src={photoURL}
            className={classes.photo}
            alt="broadcaster"
        />
        <div
            className={classes.contentContainer}
        >
            <span>{fullName}</span>
            <span>{job}</span>
        </div>
    </div>;
};
export default Broadcaster;
