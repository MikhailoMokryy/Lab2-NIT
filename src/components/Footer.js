import React from 'react'

export default class Footer extends React.Component {

    render() {
        const info =  'Made by Mike Mokryy, 2018'
        return(
            <div className=' footer'>
            <nav className="navbar  navbar-dark bg-dark">
            <li  className="navbar-nav info nav-item active">
            <a  className="nav-link disabled"   href="#"> &copy; {info} </a>
            </li>
            </nav>
            </div>
            
        );
    }

}