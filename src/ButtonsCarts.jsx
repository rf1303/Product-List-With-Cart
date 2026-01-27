export const initialState = {
    items: []
};

export function cartReducer(state, action) {
    switch (action.type) {
        case "ADD": {
            const cartProducts = state.items.find(
                item => item.name === action.payload.name
            );
            if (cartProducts) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.name === action.payload.name
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            };
        }
        case "INCREMENT":
            return {
                ...state,
                items: state.items.map(item =>
                    item.name === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        case "DECREMENT":
            return {
                ...state,
                items: state.items
                    .map(item =>
                        item.name === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0)
            };
        case "REMOVE":
           return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            };

        default:
            return state;
    }
}
