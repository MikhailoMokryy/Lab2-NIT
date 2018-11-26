import React from 'react'
import Cart from './Cart'


class Header extends React.PureComponent {

    render() {
       return (
          <div class="container-fluid">
          <nav className="navbar  navbar-dark bg-dark fixed-top">
             <a className="navbar-brand" href="#"><p className="h1">Rusetka</p></a>
             <div className="row justify-content-end">
             <Cart />
             </div>
          </nav>
          </div>
       );
    }
 }

 export default Header