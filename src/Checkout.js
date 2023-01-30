import React from 'react';

// CSS imports
import './Checkout.css';

// User imports
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import checkout_ad from './utils/checkout_ad.jpeg';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src={checkout_ad} alt="" />
                {basket?.length === 0 ?
                    (<div>
                        <h2 className='checkout__title'>Your Shopping Basket is Empty</h2>
                        <p>You have no items in your basket. To add items to your basket click the 'Add to Basket' button next to the item on the Home Page.</p>
                    </div>)
                    : (<div>
                        <h2 className='checkout__title'>Your Shopping Basket</h2>
                        {basket?.map((item) => {
                            return (
                                <CheckoutProduct
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            );
                        })}
                    </div>)
                }
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    );
};

export default Checkout;