import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="topnav">
          <a href="#"><Link className="active" to="/">CRYPTOCRAZE</Link></a>
          <a href='#'><Link to="/top10">Top 10 Coins</Link></a>
          <a href="#"><Link to="/allCrypto">All Crypto</Link></a>
          {/* <a href="#"><Link to="/testMap2">coINFO</Link></a>  */}
          <a href="https://crypto.news/" className='shoplink'>coINFO</a>
          <a href="#"><Link to="/donate">Donate</Link></a> 
      </div>
      <Outlet />
    </>
  )
};

export default Layout;






