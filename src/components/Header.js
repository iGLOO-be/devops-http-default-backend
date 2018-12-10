
import React from 'react'
import styled from 'styled-components'

// Lib
import { fontFamily } from '../lib/Fonts'

// Assets
import Wave from '../assets/wave.svg'

const Header = styled(({
  className,

  error,
  title
}) => (
  <div className={className}>
    <div className='header__error'>{error}</div>
    <div className='header__title'>{title}</div>
  </div>
))`
  text-align: center;
  margin-bottom: 90px;
  position: relative;

  &::after {
    background: url('${Wave}') no-repeat center;
    content: '';
    position: absolute;
    bottom: -55px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 11px;
  }

  .header__error {
    ${fontFamily({ weight: 'bold', size: '165px' })};
    line-height: 165px;
  }

  .header__title { ${fontFamily({ size: '35px' })}; }
`

export default Header
