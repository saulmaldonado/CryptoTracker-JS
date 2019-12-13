
//current portfolio
let coins = [{id: 0 , name: "Bitcoin", symbol: "BTC", amount: .5, value: 3610.00}, {id: 1 , name: "Ethereum", symbol: "ETH", amount: .5, value: 7220.30}, {id: 2 , name: "Ripple", symbol: "XRP", amount: 100, value: 5.00}]

let id = coins.length



//post
function addCoin(req, res){
    const {name, symbol, amount, value} = req.body

    coins.push({
        id,
        name,
        symbol,
        amount, 
        value
    })

    id++
    res.status(200).json(coins)
}

//get
function getPortfolio (req, res){
    res.status(200).json(coins)
}

//put
function editCoin (req, res){
    const {id} = req.params
    const {name, symbol, amount, value} = req.body

    let coinIndex  = coins.findIndex(coin => coin.id === +id)

    if(coinIndex >= 0){
    
        let coinObj = coins[coinIndex]

        coinObj.amount = coinObj.amount + amount
        coinObj.value = coinObj.value + value
        
        res.status(200).json(coins)
    }
}

//delete
function deleteCoin (req, res){
    const {id} = req.params

    let coinIndex  = coins.findIndex(coin => coin.id === +id)
    
    if(coinIndex >= 0){
        coins.splice(coinIndex, 1)
    }
    res.status(200).json(coins)
}

module.exports = {
    addCoin,
    getPortfolio,
    editCoin,
    deleteCoin
}
