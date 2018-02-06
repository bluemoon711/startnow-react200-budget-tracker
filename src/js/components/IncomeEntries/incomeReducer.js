
const defaultState = {
    description: '',
    amount: '',
    lineItems: []
  };
  
  export default function IncomeReducer (state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_Income_DESCRIPTION':{
            return {
                ...state,
                description: payload.description
            };
        }

        case 'UPDATE_Income_AMOUNT': {
            return {
                ...state,
                amount: payload.amount
            };
        }
        
        case 'ADD_Income': {
            const { description, amount } = action.payload;
            return {
                description: '',
                action: '',
                lineItems: [
                    ...state.lineItems,
                    { description, amount }
                ]
            };
        }

        default: {
            return state;
        }
    }
}