import React from 'react'
import Sell from './Sell'
import Buy from './Buy'

export default class BuyAndSell extends React.Component{
    constructor(){
        super()

        this.state = {
            coinSymbol: '',
            tradePrice: 0,
            quantity: '',
            coinName: '',
            marketSymbols: [],
            marketPrices: [],
            coinAmount: []

        }
        this.symbolChangeHandle = this.symbolChangeHandle.bind(this)
        this.tradePriceChangeHandle = this.tradePriceChangeHandle.bind(this)
        this.quantityChangeHandle = this.quantityChangeHandle.bind(this)
        this.coinNameHandle = this.coinNameHandle.bind(this)


    }

    symbolChangeHandle(input){
        this.setState({coinSymbol: input})
        this.setState({ tradePrice: this.state.marketPrices[this.state.marketSymbols.findIndex(ele => input === ele)]})
    }

    tradePriceChangeHandle(input){
 
    }

    quantityChangeHandle(input){
        this.setState({quantity: +input})
    }
    coinNameHandle(input){
        this.setState({coinName: input})
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return {
            marketSymbols: nextProps.marketSymbols,
            marketPrices: nextProps.marketPrices,
            coinSymbols: nextProps.coinSymbols,
            coinAmount: nextProps.coinAmount
        }
    }

    render(){
        const {coinName, coinSymbol, tradePrice, quantity, coinSymbols, coinAmount} = this.state

        return(
            <div>
                <div>
                    Coin Name: <input onChange={event => {this.coinNameHandle(event.target.value)}}  />
                    Coin Symbol: <input onChange={event => {this.symbolChangeHandle(event.target.value)}}/>
                    Current Price: <input value={this.state.tradePrice} onChange={event => console.log(event)} disabled />
                   
                    Quantity: <input onChange={event => {this.quantityChangeHandle(event.target.value)}}/>
                    Total Value: <input value={tradePrice * quantity} disabled/>
                </div>
                <div>
                <Sell coinAmount={coinAmount}  deleteCoin={this.props.deleteCoin} coinName={coinName} coinSymbol={coinSymbol} tradePrice={tradePrice} quantity={quantity} coinSymbols={coinSymbols} updateCoin={this.props.updateCoin}/> <Buy addNewCoin={this.props.addNewCoin} coinName={coinName} coinSymbol={coinSymbol} tradePrice={tradePrice} quantity={quantity} addNewCoin={this.props.addNewCoin} coinSymbols={coinSymbols} updateCoin={this.props.updateCoin} />
                </div>

            </div>
        )
    }
}