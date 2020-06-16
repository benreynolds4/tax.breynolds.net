import React, { Component } from 'react'

import CapitalGainsTax from './CapitalGainsTax';
import Form11 from './Form11';
import FormsToPopulate from './FormsToPopulate';



export class Result extends Component {

    getTotalChargeableAmount(esppTransactions) {
        let AnnualESPPTotalChargeableAmount = 0;
        esppTransactions.forEach(transaction =>
            AnnualESPPTotalChargeableAmount += this.calculateESPPTotalGain(transaction)
        )
        return AnnualESPPTotalChargeableAmount.toFixed(2);
    }

    getAnnualRTSOPaid(esppTransactions) {
        let AnnualAmountOfRelevantTaxOnShareOptionRTSOPaid = 0;
        esppTransactions.forEach(transaction =>
            AnnualAmountOfRelevantTaxOnShareOptionRTSOPaid += this.calculateESPPTotalLiability(transaction)
        )
        return AnnualAmountOfRelevantTaxOnShareOptionRTSOPaid.toFixed(2);
    }

    getChargeableAssestsAcquired() {
        var totalChargeableAssestsAcquired = 0;
        this.props.transactions.forEach(transaction =>
            totalChargeableAssestsAcquired += transaction.totalSaleValue
        )
        return totalChargeableAssestsAcquired.toFixed(2);
    }

    getChargeableGain() {
        if(this.getRemainingCapitalGainAllowance() < 0) {
            return (this.getRemainingCapitalGainAllowance() * -1).toFixed(2)
        }
        return 0;
    }

    getTotalCapitalGainToPayForYear() {
        if(this.getRemainingCapitalGainAllowance() < 0) {
            return ((this.getRemainingCapitalGainAllowance() * 0.33) * -1).toFixed(2);
        } 
        return 0;
    }


    getRemainingCapitalGainAllowance() {
        return 1270 - this.getTotalAnnualTaxLiability();
    }

    getTotalAnnualTaxLiability() {
        var totalAnnualTaxLiability =0;
        this.props.transactions.forEach(transaction =>
            totalAnnualTaxLiability += transaction.capitalGain
        )
        return totalAnnualTaxLiability;
    }

    calculateESPPTotalLiability(transaction) {
        return ((transaction.fairMarketValue - transaction.acquiredPriceEuro) * 0.52 ) *transaction.numberShares;
    }

    calculateESPPTotalGain(transaction) {
        return (transaction.fairMarketValue - transaction.acquiredPriceEuro) * transaction.numberShares;
    }

    render() {
        let {transactions, year} = this.props
        let esppTransactions = []

        transactions.forEach(transaction => {
            if(transaction.shareType === 'espp') {
                esppTransactions.push(transaction)
            }
        })

        let totalCapitalGainToPayForYear = this.getTotalCapitalGainToPayForYear()
    
        return (
            transactions.length > 0 ? 
            <React.Fragment>
                <FormsToPopulate 
                    transactions={transactions}  
                    esppTransactions={esppTransactions} 
                    totalCapitalGainToPayForYear={totalCapitalGainToPayForYear}
                    year={year}  />
                {
                    totalCapitalGainToPayForYear > 0 ? 
                        <CapitalGainsTax cgtToPay={totalCapitalGainToPayForYear} year={year} />    
                        : ''
                }
                
                <Form11 totalChargeableAmount={this.getTotalChargeableAmount(esppTransactions)} 
                    AnnualRTSOPaid={this.getAnnualRTSOPaid(esppTransactions)} 
                    chargeableAssestsAcquired={this.getChargeableAssestsAcquired()} 
                    chargeableGain={this.getChargeableGain()} 
                    totalCapitalGainToPayForYear={totalCapitalGainToPayForYear}
                    year={year} />
            </React.Fragment>
            : ''
        )
    }
}

export default Result
