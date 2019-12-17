import React, { useContext } from 'react'
import cn from 'classnames'
import { BudgetContext } from '../../context/BudgetContext'

const Main = () => {
	const { budget, mode, toggleMode } = useContext(BudgetContext)

	const now = new Date()
	const currentYear = now.getFullYear()
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
	const currentMonth = now.getMonth()
	const incomeSum = budget
		.filter(item => item.column === 'income')
		.reduce((sum, cur) => sum + cur.value, 0)
		.toFixed(2)
	const expensesSum = budget
		.filter(item => item.column === 'expenses')
		.reduce((sum, cur) => sum + cur.value, 0)
		.toFixed(2)
	const totalSum = budget.reduce((sum, cur) => sum + cur.value, 0).toFixed(2)
	const sign = totalSum > 0 ? '+' : ''
	const incomeSign = incomeSum > 0 ? '+' : ''
	const calcPercentage = (Math.abs(expensesSum) / incomeSum) * 100
	const percentage =
		incomeSum > 0 && expensesSum < 0 ? `${calcPercentage.toFixed(2)}%` : '---'

	return (
		<div className='main'>
			<h2 className='main__month'>
				Available budget in {months[currentMonth]} {currentYear}
			</h2>
			<h1 className='main__sum'>
				{sign}
				{totalSum}
			</h1>
			<div className='main__toggle'>
				<div className='main__toggle-income'>
					<h3>INCOME</h3>
					<h3>
						{incomeSign}
						{incomeSum}
					</h3>
				</div>
				<div
					className={cn('toggle', { 'toggle-toggled': !mode })}
					onClick={() => toggleMode()}
				>
					<div
						className={cn('toggle__circle', {
							'toggle__circle-toggled': !mode
						})}
					></div>
				</div>
				<div className='main__toggle-expenses'>
					<h3>EXPENSES</h3>
					<h3>{expensesSum}</h3>
					<p className='percentage'>{percentage}</p>
				</div>
			</div>
		</div>
	)
}

export default Main
