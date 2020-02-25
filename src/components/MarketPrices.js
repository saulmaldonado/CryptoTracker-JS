import React from 'react'
import './styles/MarketPrices.css'
import Prices from './Prices'

export default class MarketPrices extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            marketSymbols: [],
            marketPrices: [],
            prevMarketPrices: []
        }
    }




    render(){
        const {marketSymbols, marketPrices, prevMarketPrices} = this.props

        let top5Coins = marketSymbols.slice(0, 5)
        
        return(
            <div className='market-prices'>
                <div className='market-prices-title'>Market Prices</div>

                    {top5Coins.map((ele,i) => {
                    return  <div className='prices' key={i}>
                                <Prices marketSymbols={marketSymbols[i]} prevMarketPrices={prevMarketPrices[i]} marketPrices={marketPrices[i]} />
                            </div>
                    })}

                <button className='update-button' onClick={this.props.refreshData}>UPDATE PRICES</button>
            </div>
        )
    }
}