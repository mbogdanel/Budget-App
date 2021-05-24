import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext)

  let totalIncome = 0
  incomeTransactions.map(
    (incomeTransaction) => (totalIncome += incomeTransaction.incomeAmount)
  )
  let totalExpense = 0
  expenseTransactions.map(
    (expenseTransaction) => (totalExpense += expenseTransaction.expenseAmount)
  )
  const balance = (totalIncome - totalExpense).toFixed(2)

  return (
    <div className='balance'>
      <h1>Your Balance</h1>
      <h3>£ {balance}</h3>
      <div className='income-expense'>
        <div className='plus'>
          <h3>Income</h3>
          <p>+£ {totalIncome.toFixed(2)}</p>
        </div>
        <div className='minus'>
          <h3>Expences</h3>
          <p>-£ {totalExpense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default Balance
