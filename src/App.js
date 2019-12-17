import React from 'react';
import './reset.css';
import './styles/App.css'
import axios from 'axios'
import PortfolioValue from './components/PortfolioValue';
import Holdings from './components/Holdings';
import MarketPrices from './components/MarketPrices';
import BuyAndSell from './components/BuyAndSell/BuyAndSell';

 export default class App extends React.Component{
   constructor(){
     super()

     this.state = {

      coinNames: [],
      coinSymbols : [],
      coinAmount : [],
      coinBuyPrice : [],
      marketSymbols : [],
      marketPrices : [],
      prevMarketPrices : [],
      buyAndSellMode: false

     }

     this.refreshData = this.refreshData.bind(this)
     this.addNewCoin = this.addNewCoin.bind(this)
     this.updateCoin = this.updateCoin.bind(this)
     this.deleteCoin = this.deleteCoin.bind(this)
     this.switchToPortfolio = this.switchToPortfolio.bind(this)
     this.switchToBuyAndSell = this.switchToBuyAndSell.bind(this)
   }

   switchToPortfolio(){
     this.setState({buyAndSellMode: false})
   }

   switchToBuyAndSell(){
     this.setState({buyAndSellMode: true})
   }

   refreshData(){
    axios.get('/marketdata')
    .then(res => {
        
        console.log('API GET')
        this.setState({prevMarketPrices: this.state.marketPrices})
        this.setState({marketSymbols: res.data[0], marketPrices: res.data[1]})
    }).catch(( err => console.error(err)))
  }

   addNewCoin(text){
     axios.post('/api/portfolio', text)
     .then( res => {

       this.setState({coinNames: [...this.state.coinNames, res.data[res.data.length - 1].name], coinSymbols: [...this.state.coinSymbols, res.data[res.data.length - 1].symbol], coinAmount: [...this.state.coinAmount, res.data[res.data.length - 1].amount], coinBuyPrice: [...this.state.coinBuyPrice, res.data[res.data.length - 1].value]} )


      })
      .catch(( err => console.error(err)))
    }

    updateCoin(id, text){

      axios.put(`/api/portfolio/${id}`, text)
      .then( res => {

        let newCoinAmount = this.state.coinAmount
        newCoinAmount.splice(id, 1, res.data[id].amount)

        let newCoinBuyPrice = this.state.coinBuyPrice
        newCoinBuyPrice.splice(id, 1, res.data[id].value)

        

        this.setState({coinAmount: newCoinAmount, coinBuyPrice: newCoinBuyPrice})
      }).catch(( err => console.error(err)))  
    }

    deleteCoin(id){
      axios.delete(`/api/portfolio/${id}`)
      .then(res => {

            let newCoinNames = this.state.coinNames.slice()
            let newCoinSymbols = this.state.coinSymbols.slice()
            let newCoinBuyPrice = this.state.coinBuyPrice.slice()
            let newCoinAmount = this.state.coinAmount.slice()

            newCoinNames.splice(id,1)
            newCoinSymbols.splice(id,1)
            newCoinBuyPrice.splice(id,1)
            newCoinAmount.splice(id,1)


            this.setState({coinNames: newCoinNames, coinSymbols: newCoinSymbols, coinBuyPrice: newCoinBuyPrice, coinAmount: newCoinAmount})
      })
      .catch(( err => console.error(err))) 

    }

   componentDidMount(){

    this.refreshData()

    
     axios.get('/api/portfolio')
     .then(res => {

      let coinSymbols = []

      for(let i = 0; i < res.data.length; i++){
        coinSymbols.push(res.data[i].symbol)
      }
    
       let coinNames = []

       for(let i = 0; i < res.data.length; i++){
        coinNames.push(res.data[i].name)
      }
      let coinAmount = []
      
      for(let i = 0; i < res.data.length; i++){
        coinAmount.push(res.data[i].amount)
      }

      let coinBuyPrice = []

      for(let i = 0; i < res.data.length; i++){
        coinBuyPrice.push(res.data[i].value)
      }

      this.setState({coinBuyPrice: coinBuyPrice, coinAmount: coinAmount, coinNames: coinNames, coinSymbols: coinSymbols})
    })
  }
 
 render(){

  const {coinBuyPrice, coinAmount, coinNames, coinSymbols, marketSymbols, marketPrices, prevMarketPrices} = this.state


  let currentMode= this.state.buyAndSellMode


   
  return (
    <div className="App">
      <header className="header">Crypto Tracker</header>
      <div className='main'>
          <main className='main-div'>
              <PortfolioValue coinBuyPrice={coinBuyPrice} coinAmount={coinAmount} coinNames={coinNames} coinSymbols={coinSymbols} marketSymbols={marketSymbols} marketPrices={marketPrices} switchToPortfolio={this.switchToPortfolio} switchToBuyAndSell={this.switchToBuyAndSell} prevMarketPrices={prevMarketPrices}/>
            {currentMode ? ( 
              <BuyAndSell  marketSymbols={marketSymbols} marketPrices={marketPrices} addNewCoin={this.addNewCoin} coinSymbols={coinSymbols} updateCoin={this.updateCoin} deleteCoin={this.deleteCoin} coinAmount={coinAmount}/>
            ) : (
              <Holdings coinBuyPrice={coinBuyPrice} coinAmount={coinAmount} coinNames={coinNames} coinSymbols={coinSymbols} marketSymbols={marketSymbols} marketPrices={marketPrices}/>
            )}
          </main>
          <aside className='right-div'> 
              <MarketPrices refreshData={this.refreshData} marketSymbols={marketSymbols} marketPrices={marketPrices} prevMarketPrices={prevMarketPrices} />
          </aside>
          
      </div>
    </div>
  )
}

}


