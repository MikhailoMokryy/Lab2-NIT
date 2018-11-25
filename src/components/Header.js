import React from 'react'



class Header extends React.PureComponent {

    render() {
       return (
          <div class="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
             <a className="navbar-brand" href="#"><p className="h1">Rusetka</p></a>
             <div className="row justify-content-end">
                <form className="form-inline mt-2 mt-md-0">
                   <button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Basket</button>
                </form>
             </div>
          </nav>
          </div>
       );
    }
 }

 export default Header