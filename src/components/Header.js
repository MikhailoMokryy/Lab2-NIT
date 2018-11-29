import React from 'react'
import Cart from './Cart'
import axios from 'axios'



class Header extends React.PureComponent {

   constructor(props) {
      super(props);
      
      this.state = {
         categories: [],
         cart: [] ,
         isOpen: false  
         }   
   } 
     
   componentDidMount() {
     
      axios.get(`https://nit.tron.net.ua/api/category/list`).then(res => {
         const shopItems = res.data     
         this.setState({ categories : shopItems });
        })   
    }


   isOpen = (val) => {   
   this.setState({ isOpen: val })  
    } 


 
   

   render() {
      const { cart, counter } = this.props

      const shopElements = this.state.categories.map((item) => 
      <li className="navbar-nav nav-item ml-2 mr-2" onClick={() => { this.props.updateData(item.id), console.log('-id-',item.id)}} >
      <a  className="nav-link"   href="#"> { item.name } </a>
      </li>
      )

     
      return (
         <div>        
            {/* <nav className="navbar  navbar-dark bg-dark fixed-top">
               <a className="navbar-brand" href="#"><p className="h1">Rusetka</p></a> */}

               <nav className='navbar  navbar-dark bg-dark'>
               <a className="navbar-brand nav-link" href="#"  onClick={() => { this.props.updateData(0)}}><p className="h1">Rusetka</p></a>  
               <div className="row justify-content-start  align-items-start flex ">      
               { shopElements}     
               </div>          
                     <Cart isOpen={this.isOpen} cart={ cart} counter={counter} />            
                   
            </nav>     
         </div>
      );
   }
   
}

export default Header