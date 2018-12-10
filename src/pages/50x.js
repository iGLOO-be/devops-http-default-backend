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

const Error50x = () => (
  <div>
    <Helmet title='Maintenance' />
    <Header error='503' title='Service unavailable' />
    <Desc>
      The server is currently unavailable. Please try to go back or try again later.
    </Desc>
    <Footer><Button>Go back</Button></Footer>
    <TableInfo />
  </div>
)

export default Error50x
