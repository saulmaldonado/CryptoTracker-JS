import React from 'react'
import axios from 'axios'

export default class Holdings extends React.Component{
    constructor(){
        super()
        this.state = {
            coinBuyPrice: [],
            coinAmount: [],
            coinNames: [],
            coinSymbols: [],
            marketSymbols: [],
            marketPrices: []

        }
    }


    static getDerivedStateFromProps(nextProps, prevState){
        return {
            marketSymbols: nextProps.marketSymbols,
            marketPrices: nextProps.marketPrices,
            coinBuyPrice: nextProps.coinBuyPrice,
            coinAmount: nextProps.coinAmount,
            coinNames: nextProps.coinNames,
            coinSymbols: nextProps.coinSymbols

        }
    }

    componentDidUpdate(){

        
        
    }

    render(){
        const {coinBuyPrice, coinAmount, coinNames} = this.state

        let holdingValue = []

        for(let i = 0; i < coinAmount.length; i++){
            holdingValue.push(coinBuyPrice[i])
        }



        return(
            <div>
                {coinNames.map((val, i) => {
                    
                    return <div key={i}> 
                                <div key={`coinName ${i}`}>{`${val}`}</div> 
                                <div key={`values ${i}`}>{`Holdings: ${coinAmount[i]} Value: $${(this.state.marketPrices[this.state.marketSymbols.findIndex(ele => this.state.coinSymbols[i] === ele)] * coinAmount[i]).toFixed(2)} Percent of portfolio: ${  (100 * ( (coinBuyPrice[i]) / holdingValue.reduce((prev, curr) => curr + prev, 0) )).toFixed(2) } %`}</div>
                            </div>
                })}
            </div>
        )
    }
}