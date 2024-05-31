import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import Home from './Home';



export const coinOfTheDay = createContext()
// function getCoin() {
//     const [coin, setCoin] = useState("COIN OF THE DAY");
  
//     return (
//       <>
//         <h1>First Coin {coin}!</h1>
//         <button
//           type="button"
//           onClick={() => setCoin("New Coin")}
//         >Get coin of the day</button>
//       </>
//     )
//   }

function Banner() {
    const [coin, setCoin] = useState("object");
    // const [imageSrc, setImageSrc] = useState('initial-image-src.jpg');

    return (
        <div>
            <h1>Banner</h1>
            <coinOfTheDay.Provider value={coin} >
                {/* <Table /> */}
                {/* <ConQuery /> */}
                <Home />

            </coinOfTheDay.Provider>
        </div>
    );
};


export default Banner


// function Banner() {
//     function PassState(){
//     const [state, setState] = useState({
//         text: 'WELCOME TO CRYPTOCRAZE'
//     });

// }
//     return (
//         <div>
//             <h1>{state.text}</h1>
//             <button onClick={() => setState({
//                 text: 'Click a coin for coINFO'
//             })}>
//                 Go Premium
//             </button>
      
//         </div>
//     );
// };
