import { Button } from "ncore-web";
import useStyles from "./stylesheet";
import React from "react";

const WelcomeSection = () => {
    const classes = useStyles();

    return <div
        className={classes.container}
    >
        <div
            className={classes.filter}
        >
            <div
                className={classes.contentContainer}
            >
                <span
                    className={classes.title}
                >
                    Sıfırdan Geliştirici Olmak
                </span>
                <span
                    className={classes.content}
                >
                    Her hafta Cumartesi günü akşam saat 19:00 - 21:00 arası
                    “Sıfırdan Geliştirici Olmak” konulu eğitimimiz düzenlenmektedir.
                    Sizleri de aramızda görmekten memnuniyet duyarız.
                </span>
                <Button
                    title="Eğitime Git"
                    onClick={() => {
                    }}
                />
            </div>
        </div>
    </div>;
};
export default WelcomeSection;
