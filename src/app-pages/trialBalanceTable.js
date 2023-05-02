import * as React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

export const TrialBalance = () => {

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
            width: '33.33%',
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderRightWidth: 1,
        },
        tableCol: {
            width: '33.33%',
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

    const trialBalanceData = [                                                      //Mockup data for generating a trial balance sheet
        { description: 'Cash', amount: 1000, type: 'debit' },
        { description: 'Accounts Receivable', amount: 500, type: 'debit' },
        { description: 'Supplies', amount: 200, type: 'debit' },
        { description: 'Equipment', amount: 1500, type: 'debit' },
        { description: 'Accounts Payable', amount: 700, type: 'credit' },
        { description: 'Loans Payable', amount: 800, type: 'credit' },
        { description: 'Common Stock', amount: 500, type: 'credit' },
        { description: 'Retained Earnings', amount: 1200, type: 'credit' },
    ];

    //Calculating debit and credit totals based on the transaction type given for each set of data

    const debitTotal = trialBalanceData.reduce((total, item) => item.type === 'debit' ? total + item.amount : total, 0);
    const creditTotal = trialBalanceData.reduce((total, item) => item.type === 'credit' ? total + item.amount : total, 0);

    return (

        <PDFViewer style={styles.viewer}>

            <Document>
                <Page size="A4" style={styles.page}>
                    <View><Text>AccountAbility | Trial Balance</Text></View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Account Name</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Debit</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Credit</Text>
                            </View>
                        </View>
                        {trialBalanceData.map((item, index) => (
                            <View style={styles.tableRow} key={index}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{item.description}</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    {item.type === 'debit' && (
                                        <Text style={styles.tableCell}>{item.amount}</Text>
                                    )}
                                </View>
                                <View style={styles.tableCol}>
                                    {item.type === 'credit' && (
                                        <Text style={styles.tableCell}>{item.amount}</Text>
                                    )}
                                </View>
                            </View>
                        ))}
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>
                                    Total
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>
                                    {debitTotal}
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>
                                    {creditTotal}
                                </Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>

        </PDFViewer>

    )

}