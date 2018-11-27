import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListitem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render a single expense item', () => {
  const wrapper = shallow(<ExpenseListitem {...expenses[0]}/>)
  expect(wrapper).toMatchSnapshot()
})