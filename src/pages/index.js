import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

// Deps
import '../../node_modules/normalize.css/normalize.css'

// Assets
import bgStars from '../assets/stars.svg'
import bgOctopus from '../assets/octopus.svg'
import WaveLt from '../assets/wave-lt.svg'
import WaveDk from '../assets/wave-dk.svg'
import logoIgloo from '../assets/igloo.svg'

// Lib
import { colors } from '../lib/constants'
import { fontFamily } from '../lib/Fonts'

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

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 940px;
  padding: 15px;
`

const IndexPage = styled(({className}) => (
  <div className={className}>
    <Helmet title='Maintenance' />
    <Wrapper>
      <Header error='503' title='Service unavailable' />
      <Desc>
        The server is currently unavailable. Please try to go back or try again later.
      </Desc>
      <Footer><Button>Go back</Button></Footer>
      <TableInfo />
    </Wrapper>
  </div>
))`
  min-height: 100vh;
  display: flex;

  background:
    url(${logoIgloo}) no-repeat bottom 75px right 30px,
    url(${WaveLt}) repeat-x bottom,
    url(${bgOctopus}) no-repeat bottom center,
    url(${WaveDk})  repeat-x -15px bottom,
    url(${bgStars}) repeat-x,
    ${colors.primary};

  color: ${colors.light};
  ${fontFamily({weight: 'book', size: '14px'})};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  // MediaQueries
  @media screen and (max-height: 940px) {
    background:
      url(${logoIgloo}) no-repeat bottom 75px right 30px,
      url(${WaveLt}) repeat-x bottom,
      url(${WaveDk})  repeat-x -15px bottom,
      url(${bgStars}) repeat-x,
      ${colors.primary};
  }

  @media screen and (max-height: 760px) {
   background:
     url(${WaveLt}) repeat-x bottom,
     url(${bgStars}) repeat-x,
     url(${WaveDk})  repeat-x -15px bottom,
     url(${bgStars}) repeat-x,
     ${colors.primary};
  }

  @media screen and (max-height: 700px) {
   background:
     url(${bgStars}) repeat-x,
     ${colors.primary};
  }
`

export default IndexPage
