import Data from '../../data';

const initialState = {
    Products: Data.Products
};

export default function Products_Reducer(state = initialState, action) {

    switch (action.type) {

        default:
            return state;
    }

}
