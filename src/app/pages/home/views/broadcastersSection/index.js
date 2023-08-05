import React, {
    useEffect,
    useState
} from "react";
import useStyles from "./stylesheet";
import {
    Broadcaster
} from "../../../../components";

const BroadcastersSection = () => {
    const classes = useStyles();

    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://caycore.nibgat.space/getTeam", {
            "Access-Control-Allow-Origin": "*"
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if(res.code === 200) {
                    setTeamMembers(res.payload);
                    setLoading(false);
                } else {
                    throw new Error(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.error(err);
            });
    }, []);

    return <div
        className={classes.container}
    >
        <span
            className={classes.title}
        >
            Yayın Ekibi
        </span>
        <div
            className={classes.contentContainer}
        >
            {
                loading ?
                    <img
                        src="/assets/gifs/loading.gif"
                        className={classes.loading}
                        alt="loading"
                    />
                : teamMembers.map((item, index) => {
                    return <Broadcaster
                        fullName={item.fullName}
                        photoURL={item.profilePhotoURL}
                        job={item.job}
                        key={`broadcaster-${index}`}
                    />;
                })
            }
        </div>
    </div>;
};
export default BroadcastersSection;
