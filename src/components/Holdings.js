import React from 'react'
import './styles/Holdings.css'

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
        const {coinBuyPrice, coinAmount, coinNames, coinSymbols} = this.state

        let holdingValue = []

        for(let i = 0; i < coinAmount.length; i++){
            holdingValue.push(coinBuyPrice[i])
        }



        return(
            <div className='holdings'>
                {coinNames.map((val, i) => {
                    
                    return <div className='holding' key={i}> 
                                <div className='coin-name' key={`coinName ${i}`}>{`${val} ( ${coinSymbols[i]} )`}</div> 
                                <div className='data'>
                                    <div key={`values ${i}`}>
                                        <div className='data-values'>
                                            <div>{`Quantity:`}</div>
                                            <div className='value'>{coinAmount[i]}</div>
                                        </div>
                                    </div> 
                                    <div>
                                        <div className='data-values'>
                                            <div>{`Value:`} </div>
                                            <div className='value'> ${(this.state.marketPrices[this.state.marketSymbols.findIndex(ele => this.state.coinSymbols[i] === ele)] * coinAmount[i]).toFixed(2)} </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='data-values'>
                                            <div> {`Percent of portfolio:`} </div>
                                            <div className='value'> {`${(100 * ( (coinBuyPrice[i]) / holdingValue.reduce((prev, curr) => curr + prev, 0) )).toFixed(2) } %`} </div>
                                        </div>
                                         </div>
                                    </div>

                                </div>
                })}
            </div>
        )
    }
}