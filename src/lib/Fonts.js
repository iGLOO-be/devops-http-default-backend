
import { injectGlobal } from 'styled-components'

import { fontSize } from './fontSize'

export const circularStd = {
  name: 'Circular Std',
  book: {
    woff: require('../assets/fonts/circularstd-book.woff'),
    woff2: require('../assets/fonts/circularstd-book.woff2')
  },
  medium: {
    woff: require('../assets/fonts/circularstd-medium.woff'),
    woff2: require('../assets/fonts/circularstd-medium.woff2')
  },
  bold: {
    woff: require('../assets/fonts/circularstd-bold.woff'),
    woff2: require('../assets/fonts/circularstd-bold.woff2')
  },
  black: {
    woff: require('../assets/fonts/circularstd-black.woff'),
    woff2: require('../assets/fonts/circularstd-black.woff2')
  }
}

injectGlobal`
  ${fontFace(circularStd.name, circularStd.book, 300)}
  ${fontFace(circularStd.name, circularStd.medium, 400)}
  ${fontFace(circularStd.name, circularStd.bold, 500)}
  ${fontFace(circularStd.name, circularStd.black, 600)}
`

export { fontSize }

export function fontFamily ({ family = circularStd.name, size, weight = 'normal' } = {}) {
  return `
    font-family: ${family}, sans-serif;
    ${size ? fontSize(size) : ''};
    ${fontWeight(weight)};
  `
}

export function fontWeight (weightName) {
  let weight = 300

  switch (weightName) {
    case 'book':
      weight = 300
      break
    case 'medium':
      weight = 400
      break
    case 'bold':
      weight = 500
      break
    case 'black':
      weight = 600
      break
  }

  return `font-weight: ${weight}`
}

function fontFace (family, paths, weight = 'normal', style = 'normal') {
  const renderSrc = (url, type) => {
    let res = `url('${url}')`

    if (type) {
      res += ` format('${type}')`
    }

    return res
  }

  const src = [
    paths.eot && [`${paths.eot}?#iefix`, 'embedded-opentype'],
    paths.woff && [`${paths.woff}`, 'woff'],
    paths.woff2 && [`${paths.woff2}`, 'woff2'],
    paths.ttf && [`${paths.ttf}`, 'truetype'],
    paths.svg && [`${paths.svg}#${paths.svg}`, 'svg']
  ]

  return `
    @font-face {
      font-family: ${family};
      src: ${!paths.eot ? '' : renderSrc(paths.eot)};
      src: ${src.filter(s => s).map(s => renderSrc(s[0], s[1])).join(',')};
      font-weight: ${weight};
      font-style: ${style};
    }
  `
}
