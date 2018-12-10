import React from 'react'
import Helmet from 'react-helmet'

// Deps
import '../../node_modules/normalize.css/normalize.css'

// Components
import Button from '../components/ui/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Desc from '../components/Desc'

const Error404Page = ({ className }) => (
  <div>
    <Helmet title='Error 404' />
    <Header error='404' title='Page not found' />
    <Desc>
      The page you’re looking for can’t be found but may be avalaible in the future.
      Please try again later.
    </Desc>
    <Footer><Button>Go to homepage</Button></Footer>
  </div>
)

export default Error404Page
