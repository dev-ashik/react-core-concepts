import React from 'react';
import styles from "./LandingPage.module.css";  

const landingPageData = [
    {
        name: "Business",
        content: "Meet with logistic team"
    },
    {
        name: "Logistic",
        content: "Realtime order cost and location tracking"
    },
    {
        name: "Driver",
        content: "Show your profile and get the job"
    }
]

const LandingPage = () => {
    return (
        <div className={styles.contactSection}>
            {
                landingPageData.map(data => <Layout data={data}/>)
            }
        </div>
    );
};


const Layout = ({data}) => {
    const {name, content} = data;
    return (
        <div >
            <div className={styles.contact}>
                <p className={styles.cardName}>{name}</p>
                <p className={styles.content}>{content}</p>
                <button className={styles.registerButton}>Register</button>
            </div>
        </div>
    );
};

export default LandingPage;