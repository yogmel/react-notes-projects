import React from 'react'

const PortfolioWork = (props) => {
  console.log(props)
  return (
    <div>
      <h1> Portfolio #{props.match.params.id}</h1>
      <p>Check the details of this project</p>
    </div>
  )
}

export default PortfolioWork