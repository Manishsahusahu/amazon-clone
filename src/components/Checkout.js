import React from "react";
import { useStateValue } from "../context/StateProvider";
import "../css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
   const [{ basket }] = useStateValue();
   return (
      <div className="checkout">
         <div className="checkout__left">
            <img
               className="checkout_ad"
               src="https://m.media-amazon.com/images/G/38/health-personal-care/SNS.png"
               alt=""
            />
            {basket.length === 0 ? (
               <div>
                  <h2 className="checkout__title">
                     Your Shopping Basket is empty
                  </h2>
               </div>
            ) : (
               <div>
                  <h2 className="checkout__title">Your Shopping Basket</h2>
                  {basket.map((item) => {
                     return (
                        <CheckoutProduct
                           item={item.id}
                           title={item.title}
                           rating={item.rating}
                           price={item.price}
                           image={item.image}
                        />
                     );
                  })}
               </div>
            )}
         </div>
         {basket.length > 0 && (
            <div className="checkout__right">
               <Subtotal />
            </div>
         )}
      </div>
   );
};

export default Checkout;
