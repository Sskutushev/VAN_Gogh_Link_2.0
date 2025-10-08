import React from 'react';

const ProductCard = ({ image, title, availabilityIcon, availabilityText }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-card__image" />
            <div className="product-card__content">
                <h3 className="product-card__title">{title}</h3>
                <div className="product-card__availability">
                    <img src={availabilityIcon} alt="Availability icon" />
                    <span>{availabilityText}</span>
                </div>
                <button className="btn">Подробнее</button>
            </div>
        </div>
    );
};

export default ProductCard;