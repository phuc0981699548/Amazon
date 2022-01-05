import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './Product.css'
import { useStateValue } from '../../StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue()


    const handleAddToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className="product">
            
            <div className="product-info">
                
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                    .fill()
                    .map((rating, i) => (
                        <StarBorderIcon 
                        key={i}
                        />
                    ))
                    }
                 </div>
            </div>
            <img className="product-image" src={image} alt="" />
            <button 
                className="product-button"
                onClick={handleAddToBasket}
            >
                
                Add to basket
            </button>
        </div>
    )
}

export default Product
