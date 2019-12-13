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
            coinBuyPrice: nextProps.coinBuyPrice,
            coinAmount: nextProps.coinAmount,
            coinNames: nextProps.coinNames,
            coinSymbols: nextProps.coinSymbols

        }
    }

    render(){
        const {coinBuyPrice, coinAmount, coinNames} = this.state

        let holdingValue = []

        for(let i = 0; i < coinAmount.length; i++){
            holdingValue.push(coinBuyPrice[i])
        }

        console.log(this.state)
        return(
            <div>
                {coinNames.map((val, i) => {
                    
                    return <div key={i}> 
                                <div key={`coinName ${i}`}>{`${val}`}</div> 
                                <div key={`values ${i}`}>{`Holdings: ${coinAmount[i]} Value: ${coinBuyPrice[i]} Percent of portfolio: ${ Math.round (100 * ( (coinBuyPrice[i]) / holdingValue.reduce((prev, curr) => curr + prev, 0) )) } %`}</div>
                            </div>
                })}
            </div>
        )
    }
}