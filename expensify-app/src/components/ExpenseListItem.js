// Export a stateless functional component
// description, amount, createdAt
import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h1>
      <Link to={`/edit/${id}`}>
        {description}
      </Link>
    </h1>
    <p> {amount} - {createdAt} </p>
  </div>
)

export default ExpenseListItem