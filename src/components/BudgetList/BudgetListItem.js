import React, { useContext } from 'react'
import cn from 'classnames'
import { BudgetContext } from '../../context/BudgetContext'

const BudgetListItem = ({ item }) => {
	const { budget, dispatch } = useContext(BudgetContext)
	const isExpenses = item.column === 'expenses'

	const showPercentage = () => {
		if (isExpenses) {
			const expensesSum = budget
				.filter(item => item.column === 'expenses')
				.reduce((sum, cur) => sum + cur.value, 0)

			const calcPercentage = (item.value / expensesSum) * 100
			return (
				<div className='listItem__percentage'>{calcPercentage.toFixed(2)}%</div>
			)
		}
	}

	return (
		<li className='listItem'>
			<div className='listItem__description'>{item.description}</div>
			{showPercentage()}
			<div
				className={cn('listItem__value', {
					'listItem__value-expenses': isExpenses
				})}
			>
				{item.value.toFixed(2)}
			</div>
			<button
				className='listItem__btn'
				onClick={() =>
					dispatch({
						type: 'REMOVE_VALUE',
						id: item.id
					})
				}
			>
				&#10006;
			</button>
		</li>
	)
}

export default BudgetListItem
