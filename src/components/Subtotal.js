import React from "react";
import { useStateValue } from "../context/StateProvider";
import "../css/Subtotal.css";

const Subtotal = () => {
   const [{ basket }] = useStateValue();

   const getTotal = (amount, item) => amount + item.price;
   const getBaksetTotal = (basket) => {
      return basket.reduce(getTotal, 0);
   };
   let value = getBaksetTotal(basket);

   return (
      <div className="subtotal">
         <>
            <p>
               Subtotal ({basket.length} items): <strong>₹ {value}</strong>
            </p>
            <small className="subtotal__gift">
               <input type="checkbox" />
               This order contains a gift
            </small>
         </>
         <button>Proceed to checkout</button>
      </div>
   );
};

export default Subtotal;
