import * as React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

export const RetainedEarnings = () => {

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
      margin: 'auto',
      flexDirection: 'row',
    },
    tableColHeader: {
      width: '50%',
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderRightWidth: 1,
    },
    tableCol: {
      width: '50%',
      borderStyle: 'solid',
      borderRightWidth: 1,
      borderBottomWidth: 1,
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

  const retainedEarningsData = [              //Mockup data for generating a retained earnings statement
    { beginningBalance: 50000 },
    { netIncome: 20000 },
    { dividends: 10000 },
    { endingBalance: 60000 },
  ]

  return (

    <PDFViewer style={styles.viewer}>

      <Document>

        <Page size="A4" style={styles.page}>

          <View><Text>AccountAbility | Retained Earnings</Text></View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text></Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Amount</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Beginning Balance</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{retainedEarningsData[0].beginningBalance}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Net Income</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{retainedEarningsData[1].netIncome}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Dividends</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>({retainedEarningsData[2].dividends})</Text>
              </View>
            </View>
            <View style={[styles.tableRow, styles.totalsRow]}>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>Ending Balance</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>{retainedEarningsData[3].endingBalance}</Text>
              </View>
            </View>
          </View>

        </Page>

      </Document>

    </PDFViewer>

  )

}