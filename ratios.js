import * as React from 'react'

//LIQUIDITY RATIOS:

export function calculateCurrentRatio(currentAssets, currentLiabilities) {

    const currentRatio = currentAssets / currentLiabilities;

    let color;

    if(currentRatio >= 1.5 && currentRatio <= 3.0) {        //Healthy value is between 1.5 and 3.0
        color = 'green'
    }
    else if(currentRatio >= 1.0 && currentRatio < 1.5) {    //Less than 1.0 is considered bad, so this is a 'warning' range
        color = 'yellow'
    }
    else if(currentRatio > 3.0) {                           //3.0+ may (but not always) represent an issue, so this is a 'warning' rage
        color = 'yellow'
    }
    else if(currentRatio < 1.0) {                           //Less than 1.0 is considered bad
        color = 'red'
    }

    //Fix results to 1 decimal point

    return (
        <p style = {{color}}>
            Current ratio: {currentRatio.toFixed(1)}
        </p>
    );

}

export function calculateAcidTestRatio(cash, cashEquivalents, shortTermInvestments, accountsReceivable, currentLiabilities) {   //Uses only quick assets, so currentAssets cannot be used, only relevant components of it

    const acidTestRatio = (cash + cashEquivalents + shortTermInvestments + accountsReceivable) / currentLiabilities;

    let color;

    if(acidTestRatio > 1.0) {           //Over 1.0 is generally considered a good ratio
        color = 'green'
    }
    else if(acidTestRatio == 1.0) {     //1.0 is the minimum ratio a company should have, so this is considered borderline
        color = 'yellow'
    }
    else if(acidTestRatio < 1.0) {      //Less than 1.0 is considered a bad ratio value
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Acid test ratio: {acidTestRatio.toFixed(1)}
        </p>
    )

}

export function calculateCashRatio(cash, cashEquivalents, currentLiabilities) {

    const cashRatio = (cash + cashEquivalents) / currentLiabilities;

    let color;

    if(cashRatio > 1.0) {                                   //Ratio greater than 1.0 is favored
        color = 'green'
    }
    else if(cashRatio > 0.5 && cashRatio <= 1.0) {          //Warning boundary between favored and risk ranges
        color = 'yellow'
    }
    else if(cashRatio < 0.5) {                              //Ratio under 0.5 is considered risky (twice as much debt as cash)
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Cash ratio: {cashRatio.toFixed(1)}
        </p>
    )

}

//LEVERAGE RATIOS:

export function calculateDebtRatio(totalLiabilities, totalAssets) {

    const debtRatio = totalLiabilities / totalAssets;

    let color;

    if(debtRatio >= 0.3 && debtRatio < 0.6) {               //Investors look for a debt ratio between 0.3-0.6
        color = 'green'
    }
    else if(debtRatio == 0.3 || debtRatio == 0.6) {         //0.3 and 0.6 are borderline values
        color = 'yellow'
    }
    else if(debtRatio < 0.3 || debtRatio > 0.6) {           //Too little or too much debt
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Debt ratio: {debtRatio.toFixed(1)}
        </p>
    )

}

export function calculateDebtToEquityRatio(totalLiabilities, shareholderEquity) {

    const debtToEquityRatio = totalLiabilities / shareholderEquity;

    let color;

    if(debtToEquityRatio < 2.0) {               // D/E ratio should be below 2.0
        color = 'green'
    }
    else if(debtToEquityRatio == 2.0) {         //2.0 is borderline value
        color = 'yellow'
    }
    else if(debtToEquityRatio > 2.0) {          //Ratio should not be greater than 2.0
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Debt to equity ratio: {debtToEquityRatio.toFixed(1)}
        </p>
    )

}

export function calculateInterestCoverageRatio(operatingIncome, interestExpenses) {

    const interestCoverageRatio = operatingIncome / interestExpenses;

    let color;

    if(interestCoverageRatio >= 3.0) {                                              //Ratio of 3.0 or greater is preferred
        color = 'green'
    }
    else if (interestCoverageRatio >= 2.0 && interestCoverageRatio < 3.0) {         //Minimum acceptable amount (2.0) satisfied, but below preferred value (3.0), 'warning'
        color = 'yellow'
    }
    else if(interestCoverageRatio < 2.0) {                                          //Below minimum acceptable ratio of 2.0
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Interest coverage ratio: {interestCoverageRatio.toFixed(1)}
        </p>
    )

}

//EFFICIENCY RATIOS:

export function calculateAssetTurnover(netSales, beginAssets, endAssets) {

    const averageAssets = (beginAssets + endAssets) / 2;

    const assetTurnoverRatio = netSales / averageAssets;

    let color;

    if(assetTurnoverRatio > 1.0) {                  //Company can generate enough revenue for itself
        color = 'green'
    }
    else if(assetTurnoverRatio == 1.0) {            //Borderline value
        color = 'yellow'
    }
    else if(assetTurnoverRatio < 1.0) {             //Total assets cannot produce enough revenue
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Asset turnover ratio: {assetTurnoverRatio.toFixed(1)}
        </p>
    )

}

export function calculateReceivablesTurnover(netCreditSales, beginReceivables, endReceivables) {

    const averageReceivables = (beginReceivables + endReceivables) / 2;

    const receivablesTurnoverRatio = netCreditSales / averageReceivables;

    let color;

    if(receivablesTurnoverRatio > 1.0) {                //Company collects full accounts receivable amount at least once
        color = 'green'
    }
    else if(receivablesTurnoverRatio == 1.0) {          //Borderline value, company collects full amount exactly once
        color = 'yellow'
    }
    else if(receivablesTurnoverRatio < 1.0) {           //Company cannot collect full accounts receivable amount
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Receivables turnover ratio: {receivablesTurnoverRatio.toFixed(1)}
        </p>
    )

}

//PROFITABILITY RATIOS:

export function calculateGrossMargin(grossProfit, netSales) {

    const grossMarginRatio = (grossProfit / netSales) * 100;

    let color;

    if(grossMarginRatio >= 20.00) {                                          //Good profit margin
        color = 'green'
    }
    else if(grossMarginRatio >= 10.00 && grossMarginRatio < 20.00) {         //Average range
        color = 'yellow'
    }
    else if(grossMarginRatio < 10.00) {                                      //Low range
        color = 'red'
    }

    //Shown as a percent, fixed to two decimal places

    return (
        <p style = {{color}}>
            Gross margin ratio: {grossMarginRatio.toFixed(2)}%
        </p>
    )

}

export function calculateOperatingMargin(operatingIncome, netSales) {

    const operatingMarginRatio = (operatingIncome / netSales) * 100;

    let color;

    if(operatingMarginRatio >= 15.00) {                                                 //Good operating margin
        color = 'green'
    }
    else if(operatingMarginRatio >= 10.00 && operatingMarginRatio < 15.00) {            //Average range
        color = 'yellow'
    }
    else if(operatingMarginRatio < 10.00) {                                             //Low range
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Operating margin ratio: {operatingMarginRatio.toFixed(2)}%
        </p>
    )

}

export function calculateReturnOnAssets(netIncome, totalAssets) {

    const returnOnAssetsRatio = (netIncome / totalAssets) * 100;

    let color;

    if(returnOnAssetsRatio >= 20.00) {                                              //Excellent ROA
        color = 'green'
    }
    else if(returnOnAssetsRatio >= 5.00 && returnOnAssetsRatio < 20.00) {           //Borderline range
        color = 'yellow'
    }
    else if(returnOnAssetsRatio < 5.00) {                                           //Low ROA
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Return on assets ratio: {returnOnAssetsRatio.toFixed(2)}%
        </p>
    )

}

export function calculateReturnOnEquity(netIncome, shareholderEquity) {

    const returnOnEquityRatio = (netIncome / shareholderEquity) * 100;

    let color;

    if(returnOnEquityRatio >= 15.00) {                                              //Good ROE
        color = 'green'
    }
    else if(returnOnEquityRatio >= 5.00 && returnOnEquityRatio < 15.00) {           //Borderline range
        color = 'yellow'
    }
    else if(returnOnEquityRatio < 5.00) {                                           //Low ROE
        color = 'red'
    }

    return (
        <p style = {{color}}>
            Return on equity ratio: {returnOnEquityRatio.toFixed(2)}%
        </p>
    )

}