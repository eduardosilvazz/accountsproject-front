import React from 'react';
import Header from './component/header';
import Example from './component/example';
import Marketplace from './component/marketplace';
import Sidebar from './component/sidebar';
import TopHeader from './component/topheader';
import styles from './page.module.css';

const Home: React.FC = () => {
    return (
        <>
            <TopHeader />
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <Example />
                        <Marketplace />
                    </div>
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default Home;
