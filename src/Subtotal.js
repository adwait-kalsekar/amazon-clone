import React from 'react';
import CurrencyFormat from 'react-currency-format';

//CSS imports 
import './Subtotal.css';

//User imports
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }] = useStateValue();
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
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;