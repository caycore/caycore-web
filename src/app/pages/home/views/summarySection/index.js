import useStyles from "./stylesheet";
import React from "react";

const SummarySection = () => {
    const classes = useStyles();

    return <div
        className={classes.container}
    >
        <span
            className={classes.title}
        >
            Çay Core Nedir?
        </span>
        <div
            className={classes.contentContainer}
        >
            <img
                src="assets/images/logo.png"
                className={classes.image}
            />
            <p>
                Çay Core; NİBGAT® | Topluluğunun üretmiş olduğu bir 
                projedir. Proje kapsamı olarak “yayıncılık” ifade 
                etmektedir. Çeşitli sosyal medya ve yayıncılık 
                araçları ile NİBGAT® | Çekirdek ve NİBGAT® | Topluluk 
                faaliyetlerinin ekip içi görünümünün de yer aldığı, 
                samimi ve tamamı ile ekibin yer aldığı bir ortam. 
                Çeşitli etkinlikler, eğitimler, oyunlar, yazılım 
                geliştirme faaliyetlerinin yapıldığı hatta açık kaynak 
                olarak sunulduğu bir yerdir. Resmi faaliyetlerden daha 
                ziyade NİBGAT®’ın kamera arkası olarak da nitelendirilebilir.
            </p>
        </div>
    </div>;
};
export default SummarySection;
