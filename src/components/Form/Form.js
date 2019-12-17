import React, { useContext, useState } from 'react'
import cn from 'classnames'
import { BudgetContext } from '../../context/BudgetContext'

const Form = () => {
	const { dispatch, mode } = useContext(BudgetContext)
	const [description, setDescription] = useState('')
	const [value, setValue] = useState('')
	const column = mode ? 'income' : 'expenses'
	const finalValue = Number.parseFloat(mode ? value : 0 - value)

	const handleSubmit = e => {
		e.preventDefault()
		dispatch({
			type: 'ADD_VALUE',
			value: {
				description,
				value: finalValue,
				column
			}
		})
		setDescription('')
		setValue('')
	}

	return (
		<form className='form' onSubmit={handleSubmit}>
			<input
				className={cn('form__description', {
					'form__description-toggled': !mode
				})}
				type='text'
				placeholder='Add description'
				value={description}
				onChange={e => setDescription(e.target.value)}
				required
			/>
			<input
				className={cn('form__value', { 'form__value-toggled': !mode })}
				type='number'
				step='0.01'
				min='0.01'
				placeholder='Value'
				value={value}
				onChange={e => setValue(e.target.value)}
				required
			/>
			<input
				className={cn('form__submit', { 'form__submit-toggled': !mode })}
				type='submit'
				value='&#10004;'
			/>
		</form>
	)
}

export default Form
