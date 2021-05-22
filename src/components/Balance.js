import React from 'react'

const Balance = () => {
  return (
    <div className='balance'>
      <h1>Your Balance</h1>
      <h3>£ 0.00</h3>
      <div className='income-expense'>
        <div className='plus'>
          <h3>Income</h3>
          <p>+£ 0.00</p>
        </div>
        <div className='minus'>
          <h3>Expences</h3>
          <p>-£ 0.00</p>
        </div>
      </div>
    </div>
  )
}

export default Balance
