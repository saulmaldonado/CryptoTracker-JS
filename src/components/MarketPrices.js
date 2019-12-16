import React from 'react'

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
            <div>
                    {top5Coins.map((ele,i) => {
                    return <div key={i}>
                                <div> {marketSymbols[i]} </div> <div> Percent Change :{prevMarketPrices[i] ? `${(((marketPrices[i] / prevMarketPrices[i]) - 1) * 100).toFixed(2)}%` : `0%`} </div>
                                <div> {`$${marketPrices[i].toFixed(2)}`} </div>
                            </div>
                    })}
                <button onClick={this.props.refreshData}>UPDATE PRICES</button>
            </div>
        )
    }
}