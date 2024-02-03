import React from 'react'
import styles from '../../styles/common/header.module.css'
import logo from '../../assets/festxsvce logo.png';

function Header() {
    return (
        // <div className={styles.body}>
            <div className={styles.container}>
                <img src={logo} alt="Tech Fest" height={'140px'} width={'140px'} className={styles.img} />
                <div  className={styles.anContainer}>
                    <a href="#home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Events">Events</a>
                    <a href="#Passes">Get Passes</a>
                    <a href="#Workshop">Workshops</a>
                    <a href="#Proshows">Proshows</a>
                    <a href="#Sponsor">Sponsors</a>
                    <a href="#Location">Location</a>
                    <a href="#Contact">Contact</a>
                </div>
            </div>
        // </div>
    )
}

export default Header
