'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './checkout.module.css';

interface ProductProps {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
}



const Checkout = (id) => {

  <h1>aaa</h1>

  console.log(id)

    fetch(`http://localhost:8000/products/2`)
    .then(function(response) {
      console.log(response)
    })


    // const searchParams = useSearchParams()
    // const { productId } = router.query;
    // const [product, setProduct] = useState<Product | null>(null);
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     cpf: '',
    //     phone: '',
    //     email: ''
    // });

    // useEffect(() => {
    //     if (productId) {
    //         fetchProduct(productId as string);
    //     }
    // }, [productId]);

    // const fetchProduct = async (id: string) => {
    //     const res = await fetch(`http://localhost:8000/products/${id}`);
    //     const data = await res.json();
    //     setProduct(data);
    // };

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Adicione a lógica para processar os dados do formulário
    //     console.log(formData, product);
    // };

    // return (
    //     <div className={styles.checkoutContainer}>
    //         <h1>Checkout</h1>
    //         {product && (
    //             <div className={styles.productDetails}>
    //                 <img src={product.image} alt={product.name} className={styles.productImage} />
    //                 <h2>{product.name}</h2>
    //                 <p>{product.description}</p>
    //                 <p className={styles.productPrice}>{product.price}</p>
    //             </div>
    //         )}
    //         <form onSubmit={handleSubmit} className={styles.checkoutForm}>
    //             <label>
    //                 Nome:
    //                 <input 
    //                     type="text" 
    //                     name="firstName" 
    //                     value={formData.firstName} 
    //                     onChange={handleChange} 
    //                     required 
    //                 />
    //             </label>
    //             <label>
    //                 Sobrenome:
    //                 <input 
    //                     type="text" 
    //                     name="lastName" 
    //                     value={formData.lastName} 
    //                     onChange={handleChange} 
    //                     required 
    //                 />
    //             </label>
    //             <label>
    //                 CPF:
    //                 <input 
    //                     type="text" 
    //                     name="cpf" 
    //                     value={formData.cpf} 
    //                     onChange={handleChange} 
    //                     required 
    //                 />
    //             </label>
    //             <label>
    //                 Telefone:
    //                 <input 
    //                     type="tel" 
    //                     name="phone" 
    //                     value={formData.phone} 
    //                     onChange={handleChange} 
    //                     required 
    //                 />
    //             </label>
    //             <label>
    //                 Email:
    //                 <input 
    //                     type="email" 
    //                     name="email" 
    //                     value={formData.email} 
    //                     onChange={handleChange} 
    //                     required 
    //                 />
    //             </label>
    //             <button type="submit">Finalizar Compra</button>
    //         </form>
    //     </div>
    // );
};

export default Checkout;
