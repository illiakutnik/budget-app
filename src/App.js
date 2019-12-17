import React from 'react'
import './style/App.scss'

import BudgetContextProvider from './context/BudgetContext'
import Main from './components/Main/Main'
import Form from './components/Form/Form'
import BudgetList from './components/BudgetList/BudgetList'

function App() {
	return (
		<div className='App'>
			<BudgetContextProvider>
				<Main />
				<Form />
				<BudgetList />
			</BudgetContextProvider>
		</div>
	)
}

export default App
