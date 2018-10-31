import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import payload from '../../resolvers/payload';

import './Navbar.css';
import NavBarLink from './NavbarLink';



class Navbar extends Component {


    chargeProfile = () => {

        const token = localStorage.getItem('token')
        if(token !== null){

            let pl = payload(token)
          return (
                <ul className='navbar-nav'>

                    <li className="navbar-item">
                        <Link to={`/profile/${pl.id}`} className="nav-link">Welcome {pl.email}</Link>
                    </li>

                    <NavBarLink to='/home' title='Home'/>
                    <NavBarLink to='/books' title='Books'/>
                    <NavBarLink to='/logout' title='Logout'/>
                    <NavBarLink to='/new-book' title='Add Book'/>
                </ul>
          )
        }else{
          return (
                <ul className='navbar-nav'>
                <NavBarLink to='/login' title='Login'/>
                <NavBarLink to='/signup' title='Signup'/>
                </ul>
          )
        }
      }
    


    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a  href="/">MyBooks</a>
                <button className='navbar-toggler' type="button" data-toggle="collapse" data-target='#navbar' 
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    {this.chargeProfile()}
                </div>
            </nav>
        )
    }
}


export default Navbar;