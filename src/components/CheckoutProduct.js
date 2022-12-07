import React from "react";
import { useStateValue } from "../context/StateProvider";
import "../css/CheckoutProduct.css";

const CheckoutProduct = ({ item, title, rating, image, price }) => {
   const [, dispatch] = useStateValue();

   const removeFromBasket = () => {
      dispatch({
         type: "REMOVE_FROM_BASKET",
         id: item,
      });
   };
   return (
      <div className="checkoutProduct">
         <img className="checkoutProduct__image" src={image} alt="" />
         <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
               <small>₹</small>
               <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
               {Array(rating)
                  .fill()
                  .map(() => {
                     return <p>⭐️</p>;
                  })}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
         </div>
      </div>
   );
};

export default CheckoutProduct;
