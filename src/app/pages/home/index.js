import { Footer } from "../../components";
import useStyles from "./stylesheet";
import BroadcastersSection from "./views/broadcastersSection";
import SummarySection from "./views/summarySection";
import WelcomeSection from "./views/welcomeSection";

const Home = ({
    isMainFooterVisible
}) => {
    const classes = useStyles();

    return <div
        className={classes.container}
    >
        <WelcomeSection/>
        <div
            className={classes.broadcastContainer}
        >
            <div
                className={classes.broadcastIndicator}
            >
                <div></div>
            </div>
            Yayın akışını görüntüleyin. <img src="/assets/icons/chevron-right.svg"/>
        </div>
        <SummarySection/>
        <BroadcastersSection/>
        <Footer
            isVisible={!isMainFooterVisible}
            isSticky={false}
        />
    </div>;
};
export default Home;
