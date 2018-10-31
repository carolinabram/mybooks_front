import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLink = (props) => (
    
     <li className="navbar-item">
        <Link to={props.to} className="nav-link">{props.title}</Link>
    </li>

)

export default NavBarLink;

