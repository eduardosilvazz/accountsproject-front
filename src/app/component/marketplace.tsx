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
  
  const Marketplace: React.FC = () => {
    return (
        <div style={{ display: 'flex', gap: '16px' }}>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
  };
  
  export default Marketplace;