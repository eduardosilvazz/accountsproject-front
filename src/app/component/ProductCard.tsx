import React from 'react';
import styles from '../static/css/ProductCard.module.css';
import Link from 'next/link';

interface ProductCardProps {
    image: string;
    title: string;
    price: string;
    description: string;
    id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, description, id }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.details}>
                <Link href={`/checkout/${id}`}>
                    <h2 className={styles.title}>{title}</h2>
                </Link>
                <p className={styles.price}>{price}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
