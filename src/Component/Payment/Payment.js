import { Link } from '@mui/material'
import React from 'react'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import GoToTop from '../GoToTop/GoToTop'
import Header from '../Header/Header'
import './Payment.css'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue()

    return (
        <div className="payment">
            <Header />
            <div className="payment-container">
                <h1>
                    Checkout (
                        <Link to='checkout'>
                            {basket.length} items
                        </Link>
                    )
                </h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery address: </h3>
                    </div>
                    <div className="payment-address">
                        <p>{user.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket.map((item, index)=> (
                            <CheckoutProduct 
                                key={index}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                    
                            />
                        ))}
                    </div>
                </div>

                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3> 
                    </div>
                    <div className="payment-details">

                    </div>
                </div>

                    
                
            </div>
            <GoToTop />
        </div>
    )
}

export default Payment
