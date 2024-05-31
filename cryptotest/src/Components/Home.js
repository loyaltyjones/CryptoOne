import React from 'react'
// import Banner from './Banner'
import { useContext } from 'react'
// import { coinOfTheDay } from './Banner'
import { CoinContext } from './CoinsState'
import CodImage from "../Images/cyptooftheday.webp"
import EthereumInmage from '../Images/Ethereum.png'


function Home() {
  const {coin, setCoin} = useContext(CoinContext)
  // const updatedCoin = useContext(coinOfTheDay)

  // const [updatedCoin, newUpDatedCoin] = useState("")

// Using useContext to have access from CoinContext
// Coin of the Day flip 
  return (
    <div className='home'>
    <h1>{coin}</h1>
    <div>
    <button id='buttonCod'
        type="button"
        onClick={() => setCoin(
          <img className="ethereumCOD" src={EthereumInmage} />)}
      >Press for coin of the Day</button>
      <button id='resetCod' 
        type="button"
        onClick={() => setCoin(
          <img className="codImage" src={CodImage} />)}
      >Reset</button>
    </div>

   </div>
   
  )
}


export default Home