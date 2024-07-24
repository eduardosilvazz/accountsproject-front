// src/app/page.tsx

import { GetServerSideProps } from 'next';
import React from 'react';
import Header from './component/header';
import Example from './component/example';
import Marketplace from './component/marketplace';
import Sidebar from './component/sidebar';
import TopHeader from './component/topheader';
import styles from './page.module.css';
import Titulomarket2 from './component/titulomarket2'
import Banner from './component/Banner'

interface Product {
    id: number;
    image: string;
    title: string;
    price: string;
    description: string;
}


interface HomePageProps {
    products: Product[];
}

export default function Home() {
    return (
        <>
            <TopHeader />
            <div>
                <Header />
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <Example />
                        <Marketplace />
                        <Titulomarket2 />
                        <Marketplace />
                    </div>
                </div>
                <div id='div-fodinha'>
                    <Banner/>
                </div>
            </div>
        </>
    );
};

