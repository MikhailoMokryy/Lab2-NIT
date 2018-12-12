import React from 'react'
import Cart from './Cart'
import axios from 'axios'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'



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
      const { cart, counter,itemsCounter } = this.props

   

      console.log(this.props)
      const shopElements = this.state.categories.map((item) => 
      <li className="nav-item " onClick={() => {   this.props.updateData(item.id), console.log('-id-',item.id)}}>
      <a  className="nav-link"   href="#"> { item.name } </a>
       </li>
      )
   
      return (
         
         <div>
      <nav className="navbar fixed-top  navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#"  onClick={() => { this.props.updateData(0)}}><p className="h1">Rusetka</p></a> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
          </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      { shopElements}    

        </ul>
   
        <Cart clearCart={this.props.clearCart}  isOpen={this.isOpen} cart={ cart} counter={counter} itemsCounter={itemsCounter}/>
       </div>
       </nav>
        </div>
        );     
      
   } 
}

export default Header