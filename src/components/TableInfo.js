
import React from 'react'
import styled from 'styled-components'

const TableInfo = styled(({
  className
}) => (
  <div className={className}>
    <table>
      <tbody>
        <tr>
          <td>Date</td>
          <td>02.11.2017 at 01:07 PM</td>
        </tr>
        <tr>
          <td>Hostname</td>
          <td>florent.local.igloo.be</td>
        </tr>
        <tr>
          <td>URL</td>
          <td>http://florent.local.igloo.be/index.cfm</td>
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

export default TableInfo
