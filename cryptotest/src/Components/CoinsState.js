import React, { createContext, useState } from 'react'
import CodImage from "../Images/cyptooftheday.webp"

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
