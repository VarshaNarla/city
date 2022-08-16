export const actionType = {
    Set_USER : 'SET_USER',
    Set_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    Set_CART_SHOW: 'SET_CART_SHOW',
    Set_CART_ITEMS: 'SET_CART_ITEMS'
};

const reducer = (state, action) =>{
    switch(action.type){
        case actionType.Set_USER :
            return {
                ...state,
                user: action.user,
        };
        case actionType.Set_FOOD_ITEMS :
            return {
                ...state,
                foodItems: action.foodItems,
        };
        case actionType.Set_CART_SHOW :
            return {
                ...state,
                cartShow: action.cartShow,
        };
        case actionType.Set_CART_ITEMS :
            return {
                ...state,
                cartItems: action.cartItems,
        };
        default :  return state;
    }
};

export default reducer;