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
        

        const {coinBuyPrice, coinAmount} = this.state

        let holdingValue = []

        for(let i = 0; i < coinAmount.length; i++){
            holdingValue.push(coinBuyPrice[i])
        }



        console.log(this.state)

        return(
            <div>
                <div>Portfolio Value</div>
                <div className='portfolio-total'> {`$${ holdingValue.reduce((prev, curr) => curr + prev, 0)}`} </div>
                <div className='portfolio-percent-change'></div>
            </div>
        )
    }
}