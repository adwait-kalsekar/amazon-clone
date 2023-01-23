import React from 'react'

// CSS imports
import './Product.css';

function Product({ id, title, price, rating, image }) {
    return (
        <div className='product'>
            <img src={image} alt="Product Image" />
            <div className='product__info'>
                <p>{title}</p>
                <div className='product__rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => {
                                return <p>⭐️</p>
                            })
                    }
                </div>
                <p className='product__price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product