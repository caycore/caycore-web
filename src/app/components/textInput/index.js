import React from "react";
import useStyles from "./stylesheet";

const TextInput = ({
    type = "text",
    onChangeText,
    placeholder,
    className,
    title,
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
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={(event) => {
                if(onChangeText) onChangeText(event.target.value);
            }}
            className={[
                classes.input,
                ...propClass
            ].join(" ")}
            {...props}
        />
    </div>;
};
export default TextInput;
