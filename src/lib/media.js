
import React from 'react'
import PropTypes from 'prop-types'
import Media from 'react-media'
import { css } from 'styled-components'

const breakpoints = {
  xs: 'max-width: 48em',
  sm: 'max-width: 64em',
  md: 'max-width: 75em',
  lg: 'screen'
}

export function mediaQuery (breakpoint, styles) {
  const condition = breakpoints[breakpoint]
  if (!condition) {
    throw new Error(`Breakpoint ${breakpoint} not recognized!`)
  }

  return (...args) => css`
    @media only screen and (${condition}) {
      ${css(...args)}
    }
  `
}

export const MediaProvider = class MediaProvider extends React.Component {
  getChildContext () {
    return {
      mediaSsrBreakpoints: this.props.breakpoints
    }
  }

  render () {
    return this.props.children
  }
}

const contextType = {
  mediaSsrBreakpoints: PropTypes.object
}

MediaProvider.childContextTypes = contextType

export const mediaBranch = (query, ComponentA, ComponentB = <div />) => {
  const MediaBranch = (props, { mediaSsrBreakpoints }) => (
    mediaSsrBreakpoints
      ? (
        mediaSsrBreakpoints[query] ? <ComponentA {...props} /> : <ComponentB {...props} />
      )
      : (
        <Media query={breakpoints[query] ? '(' + breakpoints[query] + ')' : query}>
          {matches => (
            matches
              ? <ComponentA {...props} />
              : (ComponentB ? <ComponentB {...props} /> : <div />)
          )}
        </Media>
      )
  )

  MediaBranch.contextTypes = contextType

  return MediaBranch
}
