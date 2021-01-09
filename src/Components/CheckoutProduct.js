import React from 'react'
import './Styles/CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id , title , image , price , rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      };
    return (
        <div className="checkoutProduct" key={id}>
        <img src={image} className="checkoutProduct__image" alt="" />
            <div className="checkoutProduct__info">
                <p>{title}</p>
                <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
