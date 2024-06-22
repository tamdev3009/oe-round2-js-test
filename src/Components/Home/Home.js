import {React} from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import MenuStore1 from '../Store-menu-1/MenuStore1.js';
import MenuStore2 from '../Store-menu-2/MenuStore2.js';
import MenuStore3 from '../Store-menu-3/MenuStore3.js';
import MenuStore4 from '../Store-menu-4/MenuStore4.js';
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {

  return (
    <div>
      <div className='menu-home'>
        <div className='menu-left'>
                <a href="/" class="d-flex align-items-center justify-content-center text-white text-decoration-none">
                    <span class="fs-4 menu-left-text">Milk Tea Shop</span>
                </a>
            <ul className="page-store">  
                <li className="page-item">
                    <Link className="page-link" to="/MenuStore1">Ding Tea</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link" to="/MenuStore2">Tocotoco</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link" to="/MenuStore3">Gongcha</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link" to="/MenuStore4">LeeTee</Link>
                </li>

            </ul>
        </div>
        <Routes>
            <Route path="/MenuStore1" element={<MenuStore1/>}></Route>
            <Route path="/MenuStore2" element={<MenuStore2/>}></Route>
            <Route path="/MenuStore3" element={<MenuStore3/>}></Route>
            <Route path="/MenuStore4" element={<MenuStore4/>}></Route>
        </Routes>
        </div> 
    </div>
  )}

export default Home
