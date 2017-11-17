
import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

// Assets
import bgStars from '../assets/stars.svg'
import bgOctopus from '../assets/octopus.svg'
import WaveLt from '../assets/wave-lt.svg'
import WaveDk from '../assets/wave-dk.svg'
import logoIgloo from '../assets/igloo.svg'

// Lib
import { colors } from '../lib/constants'
import { fontFamily } from '../lib/Fonts'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 940px;
  padding: 15px;
`

const TemplateWrapper = styled(({ className, children }) => (
  <div className={className}>
    <Wrapper>
      {children()}
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

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
