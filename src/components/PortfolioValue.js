import React from 'react'

export default class PortfolioValue extends React.Component{
    constructor(){
        super()
        this.state = {
            coinBuyPrice: [],
            coinAmount: [],
            coinNames: [],
            coinSymbols: [],
            holdingValue: 0,
            marketSymbols : [],
            marketPrices : []
        }
        
        
    }
    
    
    static getDerivedStateFromProps(nextProps, prevState){
        return {
            coinBuyPrice: nextProps.coinBuyPrice,
            coinAmount: nextProps.coinAmount,
            coinNames: nextProps.coinNames,
            coinSymbols: nextProps.coinSymbols,
            marketSymbols: nextProps.marketSymbols,
            marketPrices: nextProps.marketPrices
        }
    }


    
    render(){
        

        const {coinBuyPrice, coinAmount, marketSymbols, coinSymbols, marketPrices} = this.state

        let holdingValues = []

        let prevHoldingValues = []

        for(let i = 0; i < coinSymbols.length; i++){ 
        let id = marketSymbols.findIndex(ele => ele === coinSymbols[i])
            holdingValues.push(marketPrices[id] * coinAmount[i])
        }

        for(let i = 0; i < coinSymbols.length; i++){ 
            let id = marketSymbols.findIndex(ele => ele === coinSymbols[i])
                prevHoldingValues.push(this.props.prevMarketPrices[id] * coinAmount[i])
            }
    

        let totalValue = holdingValues.reduce(((curr, ele) => curr + ele),0)

        let prevTotalValue = prevHoldingValues.reduce (((curr, ele) => curr + ele),0)

        let percentChange = ((totalValue / prevTotalValue) - 1) * 100





        return(
            <div>
                <div>Portfolio Value</div>
                <div className='portfolio-total'> {`$${totalValue.toFixed(2)}`} </div>
                <div className='portfolio-percent-change'>Percent Change: {percentChange ? `${percentChange.toFixed(2)}%` : `0%`}</div>
                <button onClick={this.props.switchToPortfolio}>Portfolio</button><button onClick={this.props.switchToBuyAndSell} >Buy and Sell</button>
            </div>
        )
    }
}