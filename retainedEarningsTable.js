import * as React from 'react'
import './tables.css'

export const RetainedEarnings = () => {

    const retainedEarningsData = {
        beginningBalance: 50000,
        netIncome: 20000,
        dividends: 10000,
        endingBalance: 60000,
      }

      const { beginningBalance, netIncome, dividends, endingBalance } = retainedEarningsData;

      return (
        <table>
          <thead>
            <tr>
              <th colSpan="2">Retained Earnings Statement</th>
            </tr>
            <tr>
              <th>Beginning Retained Earnings</th>
              <td>{beginningBalance}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Net Income</th>
              <td>{netIncome}</td>
            </tr>
            <tr>
          <th>Dividends</th>
          <td>({dividends})</td>
        </tr>
        <tr>
          <th>Ending Retained Earnings</th>
          <td>{endingBalance}</td>
        </tr>
      </tbody>
    </table>
      )

}