import React from "react";
import useStyles from "./stylesheet";

const MultiTextInput = ({
    onChangeText,
    placeholder,
    className,
    title,
    value,
    id,
    ...props
}) => {
    const classes = useStyles();

    const propClass = className ? Array.isArray(className) ? className : [className] : [""];

    return <div
        className={classes.container}
    >
        <label
            for={id}
            className={classes.label}
        >
            {title}
        </label>
        <textarea
            id={id}
            placeholder={placeholder}
            onChange={(event) => {
                if(onChangeText) onChangeText(event.target.value);
            }}
            className={[
                classes.input,
                ...propClass
            ].join(" ")}
            {...props}
        >
            {value}
        </textarea>
    </div>;
};
export default MultiTextInput;
