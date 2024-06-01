import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import NoPage from './Components/NoPage';
import Searchbar from './Components/Searchbar';
// import ConQuery from './Components/ConQuery';
// import SearchQuery from './Components/SearchQuery';
import TopTen from './Components/TopTen';
import Donate from './Components/Donate';

function App() {
    return ( 
        <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="top10" element={<TopTen />} />
              <Route path="donate" element={<Donate />} />
              <Route path="*" element={<NoPage />} />
              <Route path="allCrypto" element={<Searchbar />} />
            </Route>
          </Routes>
      </BrowserRouter>   
      </div>
    );
  }
 
export default App;
   