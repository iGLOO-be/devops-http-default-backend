import React from 'react'
import Link from 'gatsby-link'

import maintenanceIcon from '../assets/maintenance.png'

const IndexPage = () => (
  <div id="main">
    <div id="header">
      <h1>
        <img className="icon" src={maintenanceIcon} alt="" />
        Server in maintenance
      </h1>
    </div>

    <div id="content">
      <h2>The server is currently unavailable.</h2>
      <p>
         Server in maintenance. Please come back in few moments.
      </p>
    </div>
  </div>
)

export default IndexPage
