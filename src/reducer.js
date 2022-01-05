const initialState = {
    basket: [],
    user: null
}


const getBasketTotal = (basket) => basket.reduce((acc, item) => acc + item.price, 0)

function reducer(state,action) {
    
    // console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'REMOVE_USER':
            return {
                user: null
            }
        

        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket , action.item]
            }
        case 'REMOVE_TO_BASKET':
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in basket`
                )
            }
            return { 
                ...state, 
                basket: newBasket
            }
        default:
           return state
    }
    
}

export { initialState, getBasketTotal } 
export default reducer