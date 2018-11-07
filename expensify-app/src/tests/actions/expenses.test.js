import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup the edit action object', () => {
  const action = editExpense('123abs', { description: 'coffee'} )
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abs',
    updates: {
      description: 'coffee'
    }
  })
})

test('should setup expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  }) 
})

test('should setup add expense action object with default values', () =>{
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 54500,
      createdAt: 0
    }
  })
})