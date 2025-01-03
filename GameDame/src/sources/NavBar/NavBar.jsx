import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src="../../../public/images/logo.svg" alt="" />
                </div>
                <button id='menuButton' className='menu' onClick={toggleMenu}><MenuIcon fontSize='large'/></button>
                <div className={isMenuOpen ? 'menu-active' : 'hidden'}>
                    <ul>
                        <li className='link-to'>
                            <Link to="/lancamentos" style={{ color: 'inherit', textDecoration: 'inherit' }}>Lançamentos</Link>
                        </li>
                        <li className='link-to'>
                            <Link to="/populares" style={{ color: 'inherit', textDecoration: 'inherit' }}>Populares</Link>
                        </li>
                        <li className='link-to'>
                            <Link to="/generos" style={{ color: 'inherit', textDecoration: 'inherit' }}>Gêneros</Link>
                        </li>
                        <li className='link-to'>
                            <Link to="/promocoes" style={{ color: 'inherit', textDecoration: 'inherit' }}>Promoções</Link>
                        </li>
                        <li className='link-to'>
                            <Link to="/conta" style={{ color: 'inherit', textDecoration: 'inherit' }}>Conta</Link>
                        </li>
                    </ul>
                    <div className="search">
                        <input type="text"/>
                        <button className='search-icon'>
                            <SearchIcon fontSize='inherit'/>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar