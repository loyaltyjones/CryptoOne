import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import Searchbar from './Components/Searchbar';
// import ConQuery from './Components/ConQuery';
// import SearchQuery from './Components/SearchQuery';











function App() {
    return (
        
        <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="searchBar" element={<Searchbar />} />
          </Route>
        </Routes>
      </BrowserRouter>   
      </div>
    );
  }
 
export default App;
   