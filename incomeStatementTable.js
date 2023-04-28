import * as React from 'react'
import './tables.css'

export const IncomeStatement = () => {

    const incomeStatementData =
    {
        revenue: [
          { description: 'Product Sales', amount: 1000 },       //Mockup data for generating an income statement sheet
          { description: 'Service Revenue', amount: 500 },
        ],
        totalRevenue: 1500,
        expenses: [
          { description: 'Rent', amount: 300 },
          { description: 'Salaries', amount: 500 },
        ],
        totalExpenses: 800,
        netIncome: 700,
      }
      
      return (

        <table>
      <thead>
        <tr>
          <th colSpan="2">Revenue</th>
        </tr>
        <tr>
          <th></th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {incomeStatementData.revenue.map((item, index) => (
          <tr key={index}>
            <td>{item.description}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
        <tr>
          <td>Total Revenue</td>
          <td>{incomeStatementData.totalRevenue}</td>
        </tr>
        <tr>
          <th colSpan="2">Expenses</th>
        </tr>
        <tr>
          <th></th>
          <th>Amount</th>
        </tr>
        {incomeStatementData.expenses.map((item, index) => (
          <tr key={index}>
            <td>{item.description}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
        <tr>
          <td>Total Expenses</td>
          <td>{incomeStatementData.totalExpenses}</td>
        </tr>
        <tr>
          <th colSpan="2">Net Income</th>
        </tr>
        <tr>
          <td></td>
          <td>{incomeStatementData.netIncome}</td>
        </tr>
      </tbody>
    </table>

      )

}