import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import './Subtotal.css'

function Subtotal() {
    const [{basket}] = useStateValue()
    const navigate = useNavigate()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal-girt">
                            <input type="checkbox" />
                            This order contains a gift

                        </small>
                    </>
                )}
               
                            
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            
            >
            </CurrencyFormat>
            
            <button
                onClick={() => navigate("/payment")}
            >
                Proceed to Checkout
            </button>

        </div>
    )
}

export default Subtotal
