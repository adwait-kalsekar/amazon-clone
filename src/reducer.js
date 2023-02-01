export const initialState = {
    basket: [],
    user: null,
};

export function getBasketTotal(basket) {
    return basket?.reduce((amount, item) => (item.price + amount), 0);
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            //Logic to manage User authentication state
            return {
                ...state,
                user: action.user,
            }

        case 'ADD_TO_BASKET':
            //Logic to add product to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //Logic to remove from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Cannot remove item (id: ${action.id})`);
            }
            return {
                ...state,
                basket: newBasket,
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            }
        default:
            return state;
    }
}

export default reducer;