export function updateIncomeDescription(description) {
    return {
        type: 'UPDATE_Income_DESCRIPTION',
        payload: { description }
    };
}

export function updateIncomeAmount(amount) {
    return {
        type: 'UPDATE_Income_AMOUNT',
        payload: { amount}
    };
}


export function addIncome(description, amount) {
    return {
        type: 'ADD_Income',
        payload: { 
            description,
            amount: parseFloat(amount)
        }
    };
}