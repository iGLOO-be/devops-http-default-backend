
import styled from 'styled-components'
import React from 'react'

// Assets
import bgStars from '../assets/stars.svg'
import bgOctopus from '../assets/octopus.svg'
import WaveLt from '../assets/wave-lt.svg'
import WaveDk from '../assets/wave-dk.svg'
import logoIgloo from '../assets/igloo.svg'

// Lib
import { colors } from '../lib/constants'
import { fontFamily, GlobalStyle } from '../lib/Fonts'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 940px;
  padding: 15px;
`

const TemplateWrapper = styled(({ className, children }) => (
  <div className={className}>
    <GlobalStyle />
    <Wrapper>
      {children}
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
  ${fontFamily({ weight: 'book', size: '14px' })};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  // MediaQueries
  @media screen and (max-height: 870px) {
    background:
      url(${logoIgloo}) no-repeat bottom 75px right 30px,
      url(${WaveLt}) repeat-x bottom,
      url(${WaveDk})  repeat-x -15px bottom,
      url(${bgStars}) repeat-x,
      ${colors.primary};
  }

  @media screen and (max-height: 600px) {
    background:
      url(${WaveLt}) repeat-x bottom,
      url(${WaveDk})  repeat-x -15px bottom,
      url(${bgStars}) repeat-x,
      ${colors.primary};
  }

  @media screen and (max-height: 700px) and (min-width: 720px) {
    background:
      url(${logoIgloo}) no-repeat bottom 75px right 30px,
      url(${bgStars}) repeat-x,
      ${colors.primary};
  }

  @media screen and (min-height: 870px) and (max-width: 720px) {
    background:
      url(${WaveLt}) repeat-x bottom,
      url(${bgOctopus}) no-repeat bottom center,
      url(${WaveDk})  repeat-x -15px bottom,
      url(${bgStars}) repeat-x,
      ${colors.primary};
  }

  @media screen and (min-height: 870px) and (max-width: 540px) {
    background:
      url(${WaveLt}) repeat-x bottom,
      url(${WaveDk})  repeat-x -15px bottom,
      url(${bgStars}) repeat-x,
      ${colors.primary};
  }

  @media screen and (max-height: 640px) {
    background:
      url(${bgStars}) repeat-x,
      ${colors.primary};
  }
`

export default TemplateWrapper
