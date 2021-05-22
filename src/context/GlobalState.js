import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: 'salary 1', incomeAmount: 15000 },
    { id: 2, incomeText: 'salary 2', incomeAmount: 100 },
    { id: 3, incomeText: 'salaru', incomeAmount: 15000 },
  ],
  expenseTransactions: [
    { id: 4, expenseText: 'rent1', expenseAmount: 1000 },
    { id: 5, expenseText: 'rent2', expenseAmount: 900 },
    { id: 6, expenseText: 'rent3', expenseAmount: 8000 },
  ],
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: 'ADD_INCOME',
      payload: incomeTransaction,
    })
  }

  const addExpense = (expenseTransaction) => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenseTransaction,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
