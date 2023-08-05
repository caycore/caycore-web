import React, {
    useState
} from "react";
import useStyles from "./stylesheet";
import {
    Footer, MultiTextInput, TextInput
} from "../../components";
import { Button } from "ncore-web";

const Contact = ({
    isMainFooterVisible
}) => {
    const classes = useStyles();

    const [nameSurname, setNameSurname] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return <div
        className={classes.containerFix}
    >
        <div
            className={classes.container}
        >
            <span
                className={classes.title}
            >
                İletişime Geçin
            </span>
            <div
                className={classes.contentContainer}
            >
                <img
                    src="assets/images/arkaplan.png"
                    class={classes.image}
                    alt=""
                />
                <div
                    className={classes.formContainer}
                >
                    <TextInput
                        id="name-surname"
                        onChangeText={(text) => {
                            setNameSurname(text);
                        }}
                        placeholder="Lütfen adınızı ve soyadınızı giriniz."
                        title="Adınız ve Soyadınız:"
                    />
                    <TextInput
                        id="subject"
                        onChangeText={(text) => {
                            setSubject(text);
                        }}
                        placeholder="Lütfen iletişime geçmek istediğiniz konuyu giriniz."
                        title="Konu:"
                    />
                    <MultiTextInput
                        id="message"
                        onChangeText={(text) => {
                            setMessage(text);
                        }}
                        value={message}
                        placeholder="Lütfen iletişime geçmek istediğiniz konuyu detaylıca belirtiniz."
                        title="Mesajınız:"
                    />
                    <Button
                        title="Gönder"
                        spreadBehaviour="stretch"
                        className={classes.send}
                        onClick={() => {
                            
                        }}
                    />
                </div>
            </div>
        </div>
        <Footer
            isVisible={!isMainFooterVisible}
            isSticky={false}
        />
    </div>;
};
export default Contact;
