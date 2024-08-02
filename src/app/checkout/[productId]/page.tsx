// src/app/checkout/[productId]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from '../checkout.module.css';

interface ProductProps {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
}

const Checkout = () => {
    const params = useParams();
    const productId = params?.productId as string | undefined;
    const [product, setProduct] = useState<ProductProps | null>(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        cpf: '',
        phone: '',
        email: ''
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (productId) {
            fetchProduct(productId);
        } else {
            setError('Product ID not found');
        }
    }, [productId]);

    const fetchProduct = async (id: string) => {
        try {
            console.log(`Fetching product with ID: ${id}`);
            const res = await fetch(`http://localhost:8000/products/${id}/`);
            console.log(`Response status: ${res.status}`);
            if (res.ok) {
                const data = await res.json();
                console.log('Product data:', data);
                setProduct(data);
            } else {
                throw new Error(`Failed to fetch product. Status: ${res.status}`);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
            setError('Failed to fetch product data. Please try again later.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData, product);
    };

    if (!productId) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.checkoutContainer}>
            <h1>Checkout</h1>
            {error && <p className={styles.error}>{error}</p>}
            {product ? (
                <div className={styles.productDetails}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p className={styles.productPrice}>{product.price}</p>
                </div>
            ) : (
                !error && <p>Produto não encontrado.</p>
            )}
            <form onSubmit={handleSubmit} className={styles.checkoutForm}>
                <label>
                    Nome:
                    <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Sobrenome:
                    <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    CPF:
                    <input 
                        type="text" 
                        name="cpf" 
                        value={formData.cpf} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Telefone:
                    <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    );
};

export default Checkout;
