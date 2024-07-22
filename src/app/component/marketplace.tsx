'use client'
import { useEffect,useState } from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        image: 'https://via.placeholder.com/150',
        title: 'Product 1',
        price: 'R$10.00',
        description: 'This is great product.'
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Product 2',
        price: 'R$20.00',
        description: 'This is another great product.'
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Product 3',
        price: 'R$25.00',
        description: 'This is another great product.'
    }
];

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
}

async function getData(): Promise<Product[]>{
    const res = await fetch('http://localhost:8000/api/products/');
    const productList = await res.json();
    console.log("oi", productList)
    return productList
};

export default function Marketplace() {

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData() {
            const productList = await getData();
            setData(productList);
        }
        fetchData();
    }, []);

    return (
        <>
            <div style={{ display: 'flex', gap: '16px' }}>
                {data.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.name}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </div>
        </>
    );
};

