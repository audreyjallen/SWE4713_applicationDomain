import * as React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

export const IncomeStatement = () => {

  const styles = StyleSheet.create({
    viewer: {
      height: window.innerHeight,         //Makes pdf size fill the browser window
      width: window.innerWidth,
    },
    page: {
      padding: 20,
    },
    table: {                                //Styling the table to display in pdf form
      display: 'table',
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 2,
    },
    tableRow: {
      flexDirection: 'row',
    },
    tableColHeader: {
      width: '50%',
      borderStyle: 'solid',
      borderRightWidth: 1,
      borderBottomWidth: 0,
    },
    tableCol: {
      width: '50%',
      borderStyle: 'solid',
      borderRightWidth: 1,
      borderBottomWidth: 0.5,
    },
    tableCellHeader: {
      margin: 'auto',
      marginTop: 5,
      fontSize: 12,
      fontWeight: 500,
    },
    tableCell: {
      margin: 'auto',
      marginTop: 5,
      fontSize: 10,
    },
  });

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

    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>

        <View><Text>AccountAbility | Income Statement</Text></View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, { flex: 2 }]}>
                <Text style={styles.tableCellHeader}>Revenue</Text>
              </View>
              <View style={styles.tableCol}>
                <Text></Text>
              </View>
            </View>
            {incomeStatementData.revenue.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={[styles.tableCol, { flex: 1 }]}>
                  <Text style={styles.tableCell}>{item.description}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.amount}</Text>
                </View>
              </View>
            ))}
            <View style={[styles.tableRow, { borderTopWidth: 1 }]}>
              <View style={[styles.tableCol, { flex: 1 }]}>
                <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>Total Revenue</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>{incomeStatementData.totalRevenue}</Text>
              </View>
            </View>
            <View style={[styles.tableRow, { borderBottomWidth: 1 }]}>
              <View style={[styles.tableCol, { flex: 1 }]}>
                <Text style={styles.tableCellHeader}>Expenses</Text>
              </View>
              <View style={styles.tableCol}>
                <Text></Text>
              </View>
            </View>
            {incomeStatementData.expenses.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={[styles.tableCol, { flex: 1 }]}>
                  <Text style={styles.tableCell}>{item.description}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.amount}</Text>
                </View>
              </View>
            ))}
            <View style={[styles.tableRow, { borderTopWidth: 1 }]}>
              <View style={[styles.tableCol, { flex: 1 }]}>
                <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>Total Expenses</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>{incomeStatementData.totalExpenses}</Text>
              </View>
            </View>
            <View style={[styles.tableRow, { borderBottomWidth: 1 }]}>
              <View style={[styles.tableCol, { flex: 1 }]}>
                <Text style={styles.tableCellHeader}>Net Income</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{incomeStatementData.netIncome}</Text>
              </View>
            </View>
          </View>

        </Page>
      </Document>
    </PDFViewer>
  )

}