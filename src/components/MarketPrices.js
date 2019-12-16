import React from 'react'
import './styles/MarketPrices.css'

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
                    return <div className='prices' key={i}>
                                <div className='name-percent'>
                                    <div> {marketSymbols[i]} </div> <div>  {prevMarketPrices[i] ? `${(((marketPrices[i] / prevMarketPrices[i]) - 1) * 100).toFixed(2)}%` : `0%`} </div>
                                </div>
                                <div className='marketvalue'> {`$${marketPrices[i].toFixed(2)}`} </div>
                            </div>
                    })}
                <button className='update-button' onClick={this.props.refreshData}>UPDATE PRICES</button>
            </div>
        )
    }
}