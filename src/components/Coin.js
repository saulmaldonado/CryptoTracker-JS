import React from 'react'
import './styles/Holdings.css'

export default function Coin(props){
    const  {coinSymbols, coinAmount, marketPrices, marketSymbols , coinBuyPrice, holdingValue, i, val} = props
    return (
    <>  
        <div className='coin-name' key={`coinName ${i}`}>{`${val} ( ${coinSymbols} )`}</div> 
        <div className='data'>
            <div key={`values ${i}`}>
                <div className='data-values'>
                    <div>{`Quantity:`}</div>
                    <div className='value'>{coinAmount}</div>
                </div>
            </div> 
            <div>
                <div className='data-values'>
                    <div>{`Value:`} </div>
                    <div className='value'> ${(marketPrices[marketSymbols.findIndex(ele => coinSymbols === ele)] * coinAmount).toFixed(2)} </div>
                </div>
            </div>
            <div>
                <div className='data-values'>
                    <div> {`Percent of portfolio:`} </div>
                    <div className='value'> {`${(100 * ( (coinBuyPrice) / holdingValue.reduce((prev, curr) => curr + prev, 0) )).toFixed(2) } %`} </div>
                </div>
            </div>
        </div>
    </>
    )
}