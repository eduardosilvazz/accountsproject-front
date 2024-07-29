// src/app/component/Banner.tsx
import React from 'react';
import styles from '../static/css/banner.module.css'; // Adjust the import path based on your project structure

interface BannerProps {
    imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl }) => {
    return (
        <div className={styles.banner} style={{ backgroundImage: `url(${imageUrl})` }}>
            <img src="images/cypher-bruto-no-background.png"/>
        </div>
    );
};

export default Banner;
