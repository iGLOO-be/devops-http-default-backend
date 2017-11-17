import React from 'react'
import Helmet from 'react-helmet'

// Deps
import '../../node_modules/normalize.css/normalize.css'

// Components
import Button from '../components/ui/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TableInfo from '../components/TableInfo'
import Desc from '../components/Desc'

const Maintenance = ({className}) => (
  <div>
    <Helmet title='Server maintenance' />
    <Header error='Oh!' title='Maintenance' />
    <Desc>
      Server in maintenance. Please come back in few moments.
    </Desc>
  </div>
)

export default Maintenance
