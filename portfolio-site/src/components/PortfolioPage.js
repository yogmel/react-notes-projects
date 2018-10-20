import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioHome = () => (
  <div>
    <h1>My work</h1>
    <p> Checkout the stuff I've done</p>
    <Link to="portfolio/1">Item 1</Link>
    <Link to="portfolio/2">Item 2</Link>
  </div>
)

export default PortfolioHome