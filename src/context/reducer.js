export const initialState = {
   basket: [],
   user: null,
};

export default function reducer(state, action) {
   switch (action.type) {
      case "SET_USER":
         return {
            ...state,
            user: action.user,
         };
      case "ADD_TO_BASKET":
         // LOGIC FOR ADDING INTO BASKET
         return {
            ...state, // return old state
            basket: [...state.basket, action.item], // plus return old state's basket + new item added.
         };
      case "REMOVE_FROM_BASKET":
         // LOGIC FOR REMOVING FORM BASKET
         let newBasket = [...state.basket];
         const index = state.basket.findIndex((basketItem) => {
            return basketItem.id === action.id;
         });
         if (index >= 0) {
            newBasket.splice(index, 1);
         }
         return { ...state, basket: newBasket };
      default:
         return state;
   }
}
