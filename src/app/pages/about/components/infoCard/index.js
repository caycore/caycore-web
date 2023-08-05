import React from "react";
import useStyles from "./stylesheet";

const InfoCard = ({
    imageURL,
    content,
    title
}) => {
    const classes = useStyles();

    return <div
        className={classes.container}
    >
        <img
            src={imageURL}
            className={classes.image}
            alt=""
        />
        <div>
            <span
                className={classes.title}
            >
                {title}
            </span>
            <p
                className={classes.content}
            >
                {content}
            </p>
        </div>
    </div>;
};
export default InfoCard;
