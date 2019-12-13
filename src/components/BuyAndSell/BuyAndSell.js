import React from 'react'
import Sell from './Sell'

export default class BuyAndSell extends React.Component{
    constructor(){
        super()

        this.state = {
            coinSymbol: '',
            tradePrice: '',
            coinQuantity: ''
        }
    }

    render(){

        return(
            <div>

                <div>
                    Coin Symbol: <input />
                    Current Price: <input value='236' disabled />
                    Trade Price: <input />
                    Quantity: <input />
                    Total Value: <input value='236' disabled/>
                </div>

                <div>
                <Sell/> <Buy />
                </div>

            </div>
        )
    }
}