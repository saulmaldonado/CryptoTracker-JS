import React from 'react';
import './reset.css';
import './styles/App.css'
import axios from 'axios'
import PortfolioValue from './components/PortfolioValue';
import Holdings from './components/Holdings';
import Charts from './components/Chart';
import MarketPrices from './components/MarketPrices';
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
      prevMarketPrices : []

     }

     this.refreshData = this.refreshData.bind(this)
   }

   refreshData(){
    axios.get('/marketdata')
    .then(res => {
        
        console.log('API GET')
        this.setState({prevMarketPrices: this.state.marketPrices})
        this.setState({marketSymbols: res.data[0], marketPrices: res.data[1]})
    })
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


   
  return (
    <div className="App">
      <header>My Portfolio</header>
      <PortfolioValue coinBuyPrice={coinBuyPrice} coinAmount={coinAmount} coinNames={coinNames} coinSymbols={coinSymbols} marketSymbols={marketSymbols} marketPrices={marketPrices} />
      <Holdings coinBuyPrice={coinBuyPrice} coinAmount={coinAmount} coinNames={coinNames} coinSymbols={coinSymbols}/>
      <Charts coinBuyPrice={coinBuyPrice} coinAmount={coinAmount} coinNames={coinNames} coinSymbols={coinSymbols} />
      <MarketPrices refreshData={this.refreshData} marketSymbols={marketSymbols} marketPrices={marketPrices} prevMarketPrices={prevMarketPrices} />
    </div>
  )
}

}


