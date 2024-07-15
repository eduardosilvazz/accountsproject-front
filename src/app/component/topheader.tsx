import React from 'react';
import styles from './topheader.module.css'; // Adjust the import path based on your project structure

const TopHeader: React.FC = () => {
    return (
        <div className={styles.topHeader}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="#">Home</a></li>
                    <li className={styles.navItem}><a href="#">Products</a></li>
                    <li className={styles.navItem}><a href="#">Contact</a></li>
                </ul>
                <ul className={styles.socialLinks}>
                    <li className={styles.navItem}>
                        <a href="https://discord.com">
                            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord" className={styles.discordIcon} />
                        </a>
                    </li>
                    <li className={styles.navItem}><a href="https://instagram.com">Instagram</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default TopHeader;
