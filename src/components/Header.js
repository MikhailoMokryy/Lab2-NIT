import React from 'react'
import Cart from './Cart'
import axios from 'axios'
import {reactLocalStorage} from 'reactjs-localstorage'


class Header extends React.PureComponent {

   constructor(props) {
      super(props);
      
      this.state = {
           all: [],
         categories: [],
         cartItems: [] ,
         isOpen: false  
         }   
   } 
     
   componentDidMount() {
     
      axios.get(`https://nit.tron.net.ua/api/category/list`).then(res => {
         const shopItems = res.data     
         this.setState({ categories : shopItems });
        })

       
    }
    componentWillUnmount(){
      reactLocalStorage.clear()
  }

   isOpen = (val) => {   
   this.setState({ isOpen: val })  
    } 


   render() {
      
      const { cartItem, counter } = this.props

     
       if(cartItem!==null){   
         reactLocalStorage.setObject( cartItem.id , cartItem )
         // this.state.cartItems.push( reactLocalStorage.getObject(cartItem.id) )
         console.log(this.state.cartItems)
         }
         

         const cartElements =this.state.cartItems.map((item) =>  
               <span > { item.name } { item.price }</span>
            )


         const cart =  this.state.isOpen&&cartElements&&<p>hello there</p>
  
   
      const shopElements = this.state.categories.map((item) => 
      <li className="navbar-nav nav-item ml-2 mr-2" onClick={() => { this.props.updateData(item.id), console.log('-id-',item.id)}} >
      <a  className="nav-link"   href="#"> { item.name } </a>
      </li>
      )

     
      return (
         <div>
         
            <nav className="navbar  navbar-dark bg-dark fixed-top">
               <a className="navbar-brand" href="#"><p className="h1">Rusetka</p></a>
               <div className="row justify-content-start">   
                               
                      { shopElements}
                     <Cart isOpen={this.isOpen} cartItem={cartItem} counter={counter} />            
               </div>  
            </nav> 

            <div className=" cart_list float-right container bg-light " >
            {cart}
          </div>  
                
         </div>
      );
   }
   
}

export default Header