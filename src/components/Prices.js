import React from 'react'
import './styles/MarketPrices.css'



export default function Prices(props){
    const { marketPrices, prevMarketPrices, marketSymbols } = props
    return(
        <>
            <div className='name-percent'>
                <div> {marketSymbols} </div> <div>  {prevMarketPrices ? `${(((marketPrices / prevMarketPrices) - 1) * 100).toFixed(2)}%` : `0%`} </div>
            </div>
            <div className='marketvalue'> {`$${marketPrices.toFixed(2)}`} </div>
        </>
    )
}



