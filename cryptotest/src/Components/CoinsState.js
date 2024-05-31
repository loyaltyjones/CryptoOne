import React, { createContext, useState } from 'react'
import CodImage from "../Images/cyptooftheday.webp"

// Creating createContext to use on Home.js Coin of the day.
export const CoinContext = createContext()

export default function CoinsState({children}) {
    const [coin, setCoin] = useState(
        <img className="codImage" src={CodImage} />
    )
  return (
    <CoinContext.Provider value={{ coin, setCoin}}>
    {children}
    </CoinContext.Provider>

  
  )
}
