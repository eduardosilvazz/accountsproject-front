'use client'
import { useEffect,useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
}

async function getData(): Promise<Product[]>{
    const res = await fetch('http://localhost:8000/products/');
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
                        id={product.id}
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

