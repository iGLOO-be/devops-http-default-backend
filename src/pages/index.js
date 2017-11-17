import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

// Deps
import '../../node_modules/normalize.css/normalize.css'

// Components
import Button from '../components/ui/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TableInfo from '../components/TableInfo'

const Desc = styled.div`
  font-size: 18px;
  line-height: 23px;
  margin: 0 auto;
  max-width: 460px;
  text-align: center;
`

const IndexPage = ({className}) => (
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

export default IndexPage
