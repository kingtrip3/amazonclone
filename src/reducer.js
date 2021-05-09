export const initialState = {
    basket: [],
    user: null
};

//selector for
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

            case 'EMPTY_BASKET':
                return {
                    ...state,
                    basket: []
                }

            case "SET_USER":
                return{
                    ...state,
                    user: action.user,
                }
            
            case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                let newBasket = [...state.basket];

                if (index >= 0) {
                    newBasket.splice(index, 1);
                } else {
                    console.warn(
                        `Can't remove product (id: ${action.id}) as it's not in the basket!`
                    )
                }

                return {
                    ...state,
                    basket: newBasket
                }
    }

};

export default reducer;