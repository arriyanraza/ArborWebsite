import React from 'react';
import styles from './Hero.css';

function Hero(){
    return(
        <div className = {styles.container}>
            <h1 className = {styles.h1}>720 Arbor Street</h1> 
            <h3 className = {styles.h3}>A$M</h3>    
        </div>
    );
};

export default Hero;
