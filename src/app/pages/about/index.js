import React from "react";
import useStyles from "./stylesheet";
import {
    Footer
} from "../../components";
import InfoCard from "./components/infoCard";

const ABOUT_PAGE_DATA = [
    {
        content: [
            {
                imageURL: "/assets/images/aboutus/broadcast1.png",
                title: "Yazılımlar geliştiriyoruz",
                content: `Açık kaynaklı veya öğrenme amaçlı, belkide para kazanmak için
                NİBGAT® Topluluk ile birlikte çeşitli yazılımları yayınlarımızda
                geliştiriyoruz. Ayrıyeten videolar ile bu alanı destekliyoruz.`
            },
            {
                imageURL: "/assets/images/aboutus/broadcast2.png",
                title: "Sohbet yayınları yapıyoruz",
                content: `NİBGAT® Çekirdek ekibi ve NİBGAT® Topluluk üyeleri 
                birlikte sohbetler ediyor, konular tartışıyoruz. Teknoloji 
                alanında güncel konuları ve gelişmeleri ele alıyoruz.`
            }
        ]
    },
    {
        content: [
            {
                imageURL: "/assets/images/aboutus/broadcast3.png",
                title: "Eğitimler veriyoruz",
                content: `Programlama, Programlama dilleri ve çeşitli framework ve
                teknoloji için çeşitli eğitimler veriyoruz. Bazı çalışmalarımız
                yayın şeklinde ilerlerken, bazıları video şeklinde olmaktadır.`
            },
            {
                imageURL: "/assets/images/aboutus/broadcast4.png",
                title: "Oyunlar oynuyoruz",
                content: `Ekip olarak bazen kafa dağıtmak için oyunlara dalıyoruz.
                Bu anlarımızı da sizlerle paylaşmak istiyoruz. Bu sebeple
                çeşitli yayınlar ile eğlenceli vakitler geçiriyoruz.`
            }
        ]
    }
];

const About = ({
    isMainFooterVisible
}) => {
    const classes = useStyles();

    return <div
        className={classes.containerFix}
    >
        <div
            className={classes.container}
        >
            <span
                className={classes.title}
            >
                Hakkımızda
            </span>
            <div
                className={classes.contentContainer}
            >
                {ABOUT_PAGE_DATA.map((item) => {
                    return <div
                        className={classes.row}
                    >
                        {item.content.map((item, index) => {
                            return <InfoCard
                                {...item}
                            />;
                        })}
                    </div>;
                })}
            </div>
        </div>
        <Footer
            isVisible={!isMainFooterVisible}
            isSticky={false}
        />
    </div>;
};
export default About;
