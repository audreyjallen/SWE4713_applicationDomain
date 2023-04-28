import * as React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

export const BalanceSheet = () => {

    const styles = StyleSheet.create({
        viewer: {
            height: window.innerHeight,
            width: window.innerWidth,
        },
        page: {
          padding: 20,
        },
        table: {
          display: 'table',
          width: '100%',
          borderStyle: 'solid',
          borderWidth: 1,
          borderRightWidth: 0,
          borderBottomWidth: 0,
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
          padding: 5,
          textAlign: 'center',
        },
        tableCol: {
            width: '50%',
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderRightWidth: 1,
            padding: 5,
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
    
    <PDFViewer style = {styles.viewer}>

        <Document>

<Page style={styles.page}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text>Assets</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Amount</Text>
            </View>
          </View>
          {balanceSheetData.assets.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.description}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.amount}</Text>
              </View>
            </View>
          ))}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text>Total Assets</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{balanceSheetData.totalAssets}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text>Liabilities</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Amount</Text>
            </View>
          </View>
          {balanceSheetData.liabilities.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.description}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.amount}</Text>
              </View>
            </View>
          ))}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text>Total Liabilities</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{balanceSheetData.totalLiabilities}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            </View>
        </View>
            </Page>

            </Document>

    </PDFViewer>

  );
};
