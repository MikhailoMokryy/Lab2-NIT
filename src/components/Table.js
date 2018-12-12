import React from 'react'
import TableRow from './TableRow'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'
import {reactLocalStorage} from 'reactjs-localstorage'

class Table extends React.PureComponent {

   constructor() {
      super();
      this.state = {
         items: [] ,
         openDescriptionId: null,
         categoryId: 0,
         cart: [],
         itemsCount: 0 ,
         count: 0,
         found: false
         }
      } 

     

       componentDidMount() {
         axios.get(`https://nit.tron.net.ua/api/product/list/category/0`).then(res => {
            const shopItems = res.data;
            this.setState({ items : shopItems , itemsCount: shopItems.length});
            console.log('====',this.state.itemsCount)
          })  
         
         
       }
      

       updateData = (id) => { 
         
          axios.get(`https://nit.tron.net.ua/api/product/list/category/`+id).then(res => {
           const shopItems = res.data;
           this.setState({ items : shopItems });
          }) 
       } 

       clearCart = () => { 
         console.log('clear cart')
        this.setState({
          cart: []
        })
     } 


       addToCart = (item) => {
       
            let found = false
       
         const updatedCart = this.state.cart.map((cartItem) => {
            if (cartItem.name == item.name) {
           
                  found =  true
              cartItem.quantity++;
              reactLocalStorage.setObject(cartItem.id,cartItem)
              console.log(cartItem) 
              return cartItem;
            } else {
              reactLocalStorage.setObject(cartItem.id,cartItem)
              console.log(cartItem) 
              return cartItem;
            }
          })
          if (!found) { 
            reactLocalStorage.setObject( item.id,{id: item.id, name: item.name, price: item.price, quantity: 1})
            updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1})   
          }  

          this.setState({
            cart: updatedCart
          })
        }




    render() {


     
      const shopElements = this.state.items.map((item, i) => 
          <TableRow
                    key={i}
                    data = {item}  addToCart={this.addToCart}
                    isOpen = {this.state.openDescriptionId === item.id}
                    onButtonClick = {this.handleClick.bind(this, item.id)}
                    onCartClick = {this.onClick}
                  //   updateCartData ={this.updateCartData }
          />   
      )
      
        
       return (
         <div>
            <Header clearCart={this.clearCart} updateData={this.updateData} cart={this.state.cart} counter={this.state.count} itemsCounter ={this.state.itemsCount} />
          <main role="main" className="container maincontainer">
          
          <div className="row flex justify-content-around align-content-center align-items-center">
             {shopElements}
          </div>
         </main>
         <Footer/>
         </div> 
       );
    } 

    handleClick = openDescriptionId => this.setState({
      openDescriptionId: this.state.openDescriptionId === openDescriptionId ? null : openDescriptionId
  })


  onClick = () => {
      this.setState({
         count: this.state.count + 1,
     })
   } 

 }

 

 export default Table