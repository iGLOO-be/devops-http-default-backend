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

const Error404Page = ({className}) => (
  <div>
    <Helmet title='Error 404' />
    <Header error='404' title='Not Found' />
    <Desc>
      Blabla
    </Desc>
    <Footer><Button>Go back</Button></Footer>
    <TableInfo />
  </div>
)

export default Error404Page
