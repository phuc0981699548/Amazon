import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './CheckoutProduct.css'
import { useStateValue } from '../../StateProvider';

function CheckoutProduct({ id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue()


    const handleRemoveFromBasket= () => {
        dispatch({
            type: "REMOVE_TO_BASKET",
            id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image" src={image} alt={title} />
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                
                <p className="checkoutProduct-price">
                <small>$</small>
                <strong>{price}</strong>    
                </p>

                <div className="checkoutProduct-rating">
                    {Array(rating)
                    .fill()
                    .map((rating, i) => (
                        <StarBorderIcon 
                            key={i}
                        />
                    ))
                    }
                </div>

                <button 
                    className="checkoutProduct-button"
                    onClick={handleRemoveFromBasket}
                >
                    Remove from basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
