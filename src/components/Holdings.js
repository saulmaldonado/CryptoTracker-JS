import React from 'react'
import './styles/Holdings.css'
import Coin from './Coin'

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
        const {coinBuyPrice, coinAmount, coinNames, coinSymbols, marketPrices, marketSymbols} = this.state

        let holdingValue = []

        for(let i = 0; i < coinAmount.length; i++){
            holdingValue.push(coinBuyPrice[i])
        }



        return(
            <div className='holdings'>

                {coinNames.map((val, i) => {
                    return  <div className='holding' key={i}> 
                                <Coin coinSymbols={coinSymbols[i]} val={val} i={i} coinAmount={coinAmount[i]} marketPrices={marketPrices} marketSymbols={marketSymbols} coinBuyPrice={coinBuyPrice[i]} holdingValue={holdingValue}/>
                            </div>
                })}

            </div>
        )
    }
}