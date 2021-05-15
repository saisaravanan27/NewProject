import { combineReducers } from 'redux';

import Products_Reducer  from './Products_Reducer/index';
import Cart_Reducer     from './Cart_Reducer';

const AppReducer = combineReducers({
    ProductsState     : Products_Reducer,
    CartState         : Cart_Reducer,
});

export default AppReducer;