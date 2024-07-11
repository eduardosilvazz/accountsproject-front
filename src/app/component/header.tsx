// components/Header.tsx
import React from 'react';
import styles from './header.module.css'; // Import CSS module

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>Marketplace</h1>
        </header>
    );
}

export default Header;
