import uuid from 'uuid'

export const budgetReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_VALUE':
			return [
				...state,
				{
					description: action.value.description,
					value: action.value.value,
					id: uuid(),
					column: action.value.column
				}
			]
		case 'REMOVE_VALUE':
			return state.filter(item => item.id !== action.id)
		default:
			return state
	}
}
