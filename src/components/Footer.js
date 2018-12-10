
import React from 'react'
import styled from 'styled-components'

// Constants
import { colors } from '../lib/constants'

const Footer = styled(({ className, children }) => (
  <div className={className}>
    {children}
  </div>
))`
  margin-top: 30px;
  position relative;
  text-align: center;
  z-index: 2;

  &::before {
    background: ${colors.primaryDk};
    content: '';
    height: 1px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: -1;
  }
`

export default Footer
