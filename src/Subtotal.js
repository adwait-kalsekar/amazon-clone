import React from 'react';
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

//CSS imports 
import './Subtotal.css';

//User imports
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();

    function proceedToCheckout() {
        if (user === null) {
            return navigate('/login');
        }
        alert('Order Placed Successfully!');
        dispatch({
            type: 'EMPTY_BASKET'
        });
        navigate('/');
    };

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => {
                    return (<>
                        <p>
                            Subtotal ({basket.length} item(s)): <strong>{` ${value}`}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>);
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs."}
            />
            <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;