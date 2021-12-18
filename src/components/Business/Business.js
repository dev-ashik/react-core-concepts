import React from 'react';
import styles from "./Business.module.css";

const Business = () => {
    return (
        <div>
            <div className={styles.BusinessTop}>
                <div className={styles.findMoreLogistic}>
                    <p className={styles.title}>Find more logistic to pickup your shippment?</p>
                    <p className={styles.description}>You can earn money by doing product delivary work, for that you need to be a driver first</p>
                    <button className={styles.companyButton}>Start your company</button>
                </div>
            </div>
            <div>
                <h3>What do we offer?</h3>
            </div>
            
        </div>
    );
};


const OfferCard = () => {
    return (
        <div>
             <div></div>
        </div>
    );
};

export default Business; 