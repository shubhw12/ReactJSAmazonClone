import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Styles/Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
import CurrencyFormat from "react-currency-format";

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/phase3/Bank_v2_PC10.jpg"></img>
            

            { basket?.length === 0 ? (
                <div>
                <h1>Your basket is empty</h1>
                <p>Please go to our main page and add some products in your basket</p>
                </div>
            ):(
                <div>
                <h2 className="checkout__title"> Your Basket</h2>
                { basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}  
                    /> 
                ))}
                </div>
            )}
            </div>
        {basket.length > 0 && (
            <div className ="checkout__right">
            
            <SubTotal />
            </div>
        )}
        </div>
    )
}

export default Checkout
