import React from 'react'

function Buy(props) {

    const { coinName, coinSymbol, tradePrice, quantity } = props

  let addCoinBody =  { 
    "name": coinName,
    "symbol": coinSymbol,
    "amount": +quantity,
    "value": +tradePrice * +quantity
    }

    let editCoinBody = {
        "amount": +quantity,
        "value": +tradePrice * +quantity
    }

    let id = props.coinSymbols.indexOf(coinSymbol)

    if(props.coinSymbols.includes(coinSymbol)){

    }

return(
    <button onClick={props.coinSymbols.includes(coinSymbol) ? () => {props.updateCoin(id ,editCoinBody)} : () => {props.addNewCoin(addCoinBody)}} >BUY</button>
)



    
}

export default Buy