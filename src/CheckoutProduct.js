import React from 'react';

//CSS imports
import './CheckoutProduct.css';

//User imports
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    function removeFromBasket() {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => {
                                return <p>⭐️</p>
                            })
                    }
                </div>
                <button onClick={removeFromBasket} >Remove from Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;