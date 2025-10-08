import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const RecommendedSection = () => {
    return (
        <section className="recommended">
            <div className="container">
                <h2 className="section-title">РЕКОМЕНДУЕМОЕ ОБОРУДОВАНИЕ</h2>

                <div className="recommended__grid">
                    {products.map(product => (
                        <ProductCard 
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            availabilityIcon={product.availabilityIcon}
                            availabilityText={product.availabilityText}
                        />
                    ))}
                </div>

                <div className="catalog-button-container">
                    <button className="btn btn--large">Перейти в каталог</button>
                </div>
            </div>
        </section>
    );
};

export default RecommendedSection;