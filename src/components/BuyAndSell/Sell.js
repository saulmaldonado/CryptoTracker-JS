import React from 'react'

function Sell(props) {


    const { coinName, coinSymbol, tradePrice, quantity, coinSymbols } = props


    let editCoinBody = {
        "amount": quantity * -1
    }

    let id = props.coinSymbols.indexOf(coinSymbol)





    
return(
    <button onClick={ quantity  >= props.coinAmount[id] ? () => {props.deleteCoin(id)} : () => {props.updateCoin(id, editCoinBody)} } disabled={coinSymbols[id] != coinSymbol}  >SELL</button>
)



    
}

export default Sell