import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    image: string;
    title: string;
    price: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, description }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.details}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.price}>{price}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
