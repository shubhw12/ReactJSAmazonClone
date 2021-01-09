import React from 'react'
import CurrencyFormat from "react-currency-format";
import './Styles/SubTotal.css'
import { getBasketTotal } from './Reducer'

import { useStateValue } from './StateProvider'
function SubTotal() {

    const [{ basket }, dispatch] = useStateValue();

    
    return (
        <div className="subtotal"> 
            <CurrencyFormat
               renderText={(value) => (
                <>
                  <p>
                    {/* Part of the homework */}
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                  </small>
                </>
              )}

                decimalScale={2}
                value = { getBasketTotal(basket) }
                displayType = {"text"}
                thousandSeperator= {true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
