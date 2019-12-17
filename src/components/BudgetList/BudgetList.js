import React, { useContext } from 'react'
import { BudgetContext } from '../../context/BudgetContext'

import BudgetListItem from './BudgetListItem'

const BudgetList = () => {
	const { budget } = useContext(BudgetContext)
	const incomeBudget = budget.filter(item => item.column === 'income')
	const expensesBudget = budget.filter(item => item.column === 'expenses')
	return (
		<div className='budgetList'>
			<div className='income'>
				<h2 className='income__title'>INCOME</h2>
				<ul className='income__list'>
					{incomeBudget.map(item => {
						return <BudgetListItem key={item.id} item={item} />
					})}
				</ul>
			</div>
			<div className='expenses'>
				<h2 className='expenses__title'>EXPENSES</h2>
				<ul className='expenses__list'>
					{expensesBudget.map(item => {
						return <BudgetListItem key={item.id} item={item} />
					})}
				</ul>
			</div>
		</div>
	)
}

export default BudgetList
