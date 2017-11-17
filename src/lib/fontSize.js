
export function fontSize (valueInPX, { rootValue = 16, unitPrecision = 5, minPx = 1 } = {}) {
  function toPx (value) {
    const parts = /^(\d+\.?\d*)([a-zA-Z%]*)$/.exec(value)
    const number = parts[1]
    const unit = parts[2]

    if (unit === 'px' || unit === '') {
      return parseFloat(number)
    } else if (unit === 'em' || unit === 'rem') {
      return parseFloat(number) * 16
    } else if (unit === '%') {
      return (parseFloat(number) / 100) * 16
    }

    return 1
  }

  function toFixed (number, precision) {
    const multiplier = Math.pow(10, precision + 1)
    const wholeNumber = Math.floor(number * multiplier)

    return Math.round(wholeNumber / 10) * 10 / multiplier
  }

  function pxReplace (strArg) {
    const str = parseFloat(strArg)

    if (minPx >= str) {
      return str + 'px'
    }

    return toFixed(str / toPx(rootValue), unitPrecision) + 'rem'
  }

  if (!valueInPX) {
    return
  }

  const pxRegExp = /(\d*\.?\d+)px/ig
  const remValue = valueInPX.replace(pxRegExp, pxReplace)

  return `font-size: ${valueInPX};font-size: ${remValue};`
}
