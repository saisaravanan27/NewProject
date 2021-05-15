const initialState = {
    cartItems: [
        { productid: 1, count: 1 }, { productid: 2, count: 1 }, { productid: 3, count: 1 }
    ],
}

export default function Cart_Reducer(state = initialState, action) {

    switch (action.type) {

        case 'AddProduct':
            var cartObj = state.cartItems;
            var cartItemExist = 0;
            if (cartObj.length > 0) {
                for (var currentCartItemIndex = 0; currentCartItemIndex < cartObj.length; currentCartItemIndex++) {
                    if (cartObj[currentCartItemIndex].productid === action.payload.productId) {
                        cartObj[currentCartItemIndex].count = cartObj[currentCartItemIndex].count + 1;
                        cartItemExist = 1;
                        break;
                    }
                }
                if (cartItemExist == 0) {
                    cartObj.push({ productid: action.payload.productId, count: 1 });
                }
            } else {
                cartObj.push({ productid: action.payload.productId, count: 1 });
            }
            return { ...state, cartItems: cartObj }
            break;

        case 'RemoveProduct':
            var cartObj = state.cartItems;
            if (cartObj.length > 0) {
                for (var currentCartItemIndex = 0; currentCartItemIndex < cartObj.length; currentCartItemIndex++) {
                    if (cartObj[currentCartItemIndex].productid === action.payload.productId) {
                        if (cartObj[currentCartItemIndex].count > 1) {
                            cartObj[currentCartItemIndex].count = cartObj[currentCartItemIndex].count - 1;
                        }
                    }
                }
            }
            return { ...state, cartItems: cartObj }
            break;
            
        default:
            return state
    }
}