
import React from 'react'
import styled from 'styled-components'

// Lib
import { fontFamily } from '../../lib/Fonts'

// Constants
import { colors } from '../../lib/constants'

const Button = styled(({
  className,
  children
}) => (
  <a href='/' className={className}>
    {children}
  </a>
))`
  ${fontFamily({ weight: 'medium', size: '16px' })};
  background: ${colors.alt};
  border-radius: 99px;
  color: ${colors.light};
  display: inline-block;
  padding: 15px 50px;
  text-align: center;
  text-decoration: none;
  transition: background .2s, transform .2s, box-shadow .2s;

  &:hover {
    background: ${colors.altLt};
    box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
    transform: translateY(-1px);
  }
`

export default Button
