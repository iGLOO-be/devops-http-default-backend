
import React from 'react'
import styled from 'styled-components'
import mapProps from 'recompose/mapProps'

const isBrowser = typeof window !== 'undefined'

let TableInfo = styled(({
  className,
  date,
  hostname,
  url
}) => (
  <div className={className}>
    <table>
      <tbody>
        <tr>
          <td>Date</td>
          <td>{date || '-'}</td>
        </tr>
        <tr>
          <td>Hostname</td>
          <td>{hostname || '-'}</td>
        </tr>
        <tr>
          <td>URL</td>
          <td>{url || '-'}</td>
        </tr>
      </tbody>

    </table>
  </div>
))`
  max-width: 460px;
  margin: 60px auto 0;

  > table {
    border-collapse: collapse;
    width: 100%;

    tr > td:last-child { text-align: right; }

    tr:not(:last-child) td { padding-bottom: 15px; }
  }
`

TableInfo = mapProps(props => {
  if (!isBrowser) return props

  return {
    ...props,
    date: new Date().toString(),
    hostname: window.location.hostname,
    url: window.location.href
  }
})(TableInfo)

export default TableInfo
