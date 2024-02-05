import React from 'react'
import "../../index.css"
import { Link, NavLink } from 'react-router-dom'
import "./header.css"

const TopHeader = () => {
  return (
    <header>
        <div className="container-md">
            <div className="row">
                <div className="col-md-1">
                    <div className="logo">
                        <Link to='/'>Etsy</Link>
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="catagories"><i class="fa-solid fa-bars"></i> Catagories</div>
                </div>
                <div className="col-md-8">
                    <div className="search-bar">
                        <input className="form-control" placeholder="Search for anything" type="search" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="icons">
                        <nav>
                            <NavLink to='/sign'>Sign in</NavLink>
                            <NavLink to='/favorties'><i class="fa-regular fa-heart"></i></NavLink>
                            <NavLink to='/cart'><i class="fa-solid fa-cart-shopping"></i></NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default TopHeader