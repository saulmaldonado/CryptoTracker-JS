import React from 'react'
import axios from 'axios'

export default class MarketPrices extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            marketSymbols: [],
            marketPrices: [],
            prevMarketPrices: [],

        }
    }



    render(){
        console.log(this.state)
        console.log(this.props)
        const {marketSymbols, marketPrices, prevMarketPrices} = this.props
        return(
            <div>
                <div> {marketSymbols[0]} </div> <div> {((marketPrices[0] / prevMarketPrices[0]) - 1) * 100} </div>
                <div> {marketPrices[0]} </div>
                <button onClick={this.props.refreshData}>UPDATE PRICES</button>
            </div>
        )
    }
}