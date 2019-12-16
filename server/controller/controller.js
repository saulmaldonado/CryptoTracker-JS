
//current portfolio
let coins = []

let coinsId = coins.length



//post
function addCoin(req, res){
    const {name, symbol, amount, value} = req.body


    coins.push({
        id: coinsId,
        name,
        symbol,
        amount, 
        value
    })

    coinsId++

    res.status(200).json(coins)
    console.log(coinsId)
}

//get
function getPortfolio (req, res){
    res.status(200).json(coins)
}

//put
function editCoin (req, res){
    const {id} = req.params
    const {amount} = req.body


    let coinIndex  = coins.findIndex(coin => coin.id === +id)


    if(coinIndex >= 0){
    
        let coinObj = coins[coinIndex]

        coinObj.amount = coinObj.amount + amount
        
        res.status(200).json(coins)
    }
}

//delete
function deleteCoin (req, res){
    const {id} = req.params
    
    let coinIndex  = coins.findIndex(coin => coin.id === +id)
    
    if(coinIndex >= 0){
        coins.splice(coinIndex, 1)
        coinsId-- 
        console.log(coinsId)
        for(let i = coinIndex; i < coins.length; i++){
            coins[i].id--
        }
    }

    
    res.status(200).json(coins)
}

module.exports = {
    addCoin,
    getPortfolio,
    editCoin,
    deleteCoin
}
