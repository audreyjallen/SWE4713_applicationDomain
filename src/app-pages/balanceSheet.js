import * as React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

export const BalanceSheet = () => {

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
      borderBottomWidth: 1,
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

  const balanceSheetData =
  {
    assets: [                                                   //Mockup data for generating a balance sheet
      { description: 'Cash', amount: 1000 },
      { description: 'Accounts Receivable', amount: 500 },
    ],
    totalAssets: 1500,
    liabilities: [
      { description: 'Accounts Payable', amount: 300 },
      { description: 'Loans Payable', amount: 500 },
    ],
    totalLiabilities: 800,
    equity: [
      { description: 'Common Stock', amount: 300 },
      { description: 'Retained Earnings', amount: 400 },
    ],
    totalEquity: 700,
    totalLiabilitiesAndEquity: 1500,
  }

  return (

    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>

        <View><Text>AccountAbility | Balance Sheet</Text></View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={[styles.tableColHeader, { flex: 3 }]}>
                <Text style={styles.tableCellHeader}>Assets</Text>
              </View>
              <View style={[styles.tableColHeader, { flex: 1 }]}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
            </View>
            {balanceSheetData.assets.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={[styles.tableCol, { flex: 3 }]}>
                  <Text style={styles.tableCell}>{item.description}</Text>
                </View>
                <View style={[styles.tableCol, { flex: 1 }]}>
                  <Text style={styles.tableCell}>{item.amount}</Text>
                </View>
              </View>
            ))}
            <View style={[styles.tableRow, styles.tableTotalRow]}>
              <View style={[styles.tableCol, { flex: 3 }]}>
                <Text style={styles.tableCell}>Total Assets</Text>
              </View>
              <View style={[styles.tableCol, { flex: 1 }]}>
                <Text style={styles.tableCell}>
                  {balanceSheetData.totalAssets}
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableColHeader, { flex: 3 }]}>
                <Text style={styles.tableCellHeader}>Liabilities</Text>
              </View>
              <View style={[styles.tableColHeader, { flex: 1 }]}>
                <Text style={styles.tableCellHeader}></Text>
              </View>
            </View>
            {balanceSheetData.liabilities.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={[styles.tableCol, { flex: 3 }]}>
                  <Text style={styles.tableCell}>{item.description}</Text>
                </View>
                <View style={[styles.tableCol, { flex: 1 }]}>
                  <Text style={styles.tableCell}>{item.amount}</Text>
                </View>
              </View>
            ))}
            <View style={[styles.tableRow, styles.tableTotalRow]}>
              <View style={[styles.tableCol, { flex: 3 }]}>
                <Text style={styles.tableCell}>Total Liabilities</Text>
              </View>
              <View style={[styles.tableCol, { flex: 1 }]}>
                <Text style={styles.tableCell}>
                  {balanceSheetData.totalLiabilities}
                </Text>
              </View>
            </View>


            <View style={styles.tableRow}>
              <View style={[styles.tableColHeader, { flex: 3 }]}>
                <Text style={styles.tableCellHeader}>Equity</Text>
              </View>
              <View style={[styles.tableColHeader, { flex: 1 }]}>
                <Text></Text>
              </View>
            </View>
            {balanceSheetData.equity.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={[styles.tableCol, { flex: 3 }]}>
                  <Text style={styles.tableCell}>{item.description}</Text>
                </View>
                <View style={[styles.tableCol, { flex: 1 }]}>
                  <Text style={styles.tableCell}>{item.amount}</Text>
                </View>
              </View>
            ))}
            <View style={[styles.tableRow, styles.tableTotalRow]}>
              <View style={[styles.tableCol, { flex: 3 }]}>
                <Text style={styles.tableCell}>Total Equity</Text>
              </View>
              <View style={[styles.tableCol, { flex: 1 }]}>
                <Text style={styles.tableCell}>
                  {balanceSheetData.totalEquity}
                </Text>
              </View>
            </View>

            <View style={[styles.tableRow, styles.tableTotalRow]}>
              <View style={[styles.tableCol, { flex: 3 }]}>
                <Text style={styles.tableCellHeader}>Total Liabilities and Equity</Text>
              </View>
              <View style={[styles.tableCol, { flex: 1 }]}>
                <Text style={styles.tableCell}>
                  {balanceSheetData.totalLiabilitiesAndEquity}
                </Text>
              </View>
            </View>

          </View>

        </Page>
      </Document>
    </PDFViewer>

  );
};