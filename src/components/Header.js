
import React from 'react'
import styled from 'styled-components'

// Lib
import { fontFamily } from '../lib/Fonts'

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

  .header__error {
    ${fontFamily({weight: 'bold', size: '165px'})};
    line-height: 165px;
  }

  .header__title { ${fontFamily({size: '35px'})}; }
`

export default Header
