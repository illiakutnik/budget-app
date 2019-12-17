import React, { createContext, useReducer, useEffect, useState } from 'react'
import { budgetReducer } from './BudgetReducer'

export const BudgetContext = createContext()

const BudgetContextProvider = props => {
	const [budget, dispatch] = useReducer(budgetReducer, [], () => {
		const localData = localStorage.getItem('budget')
		return localData ? JSON.parse(localData) : []
	})
	useEffect(
		() => {
			localStorage.setItem('budget', JSON.stringify(budget))
		},
		[budget]
	)

	const [mode, setMode] = useState(true)
	const toggleMode = () => {
		setMode(prevmode => !prevmode)
	}
	return (
		<BudgetContext.Provider value={{ budget, dispatch, mode, toggleMode }}>
			{props.children}
		</BudgetContext.Provider>
	)
}

export default BudgetContextProvider
