import React from 'react'
import { useStateValue } from '../../StateProvider'
import GoToTop from '../GoToTop/GoToTop'
import Header from '../Header/Header'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}] = useStateValue()

    return (
        <>
            <Header />
            <div className="checkout">
                <div className="checkout-left">
                    <img 
                        className="checkout-img" 
                        src="https://icms-image.slatic.net/images/ims-web/25a9b3ec-4f10-42c3-8e67-3ab22d0b3ec6.gif"
                        alt="checkout"
                    />

                    {basket?.length === 0 ? (
                        <>
                            <h2 className="checkout-title">Your Shopping Basket is empty</h2>
                            <p>You have no items in your basket. to buy one or more items, 
                            click "Add to basket" next to the item</p>
                        
                        </>
                    
                    ) : (
                        <>
                            <h3>Hello {user?.email}</h3>
                            <h2 className="checkout-title">Your Shopping Basket</h2>
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
                        </>
                    )}

                </div>

                <div className="checkout-right">
                    {basket?.length > 0 && (
                        <Subtotal />
                    )}
                </div>
            
        </div>
        <GoToTop />
        </>
    )
}

export default Checkout
