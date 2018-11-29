import React from 'react'
import TableRow from './TableRow'
import Cart from './Cart'
import Header from './Header'
import axios from 'axios'


class Table extends React.PureComponent {

   constructor() {
      super();
      this.state = {
         items: [] ,
         openDescriptionId: null,
         categoryId: 0,
         cart: [],
         count: 0,
         found: false
         }
      }

       componentDidMount() {
         axios.get(`https://nit.tron.net.ua/api/product/list/category/0`).then(res => {
            const shopItems = res.data;
            this.setState({ items : shopItems });
          })   
       }
      

       updateData = (id) => {
         console.log('-categoryId-',id)    
         this.setState({ categoryId: id })  
       } 


       addToCart = (item) => {
       
            let found = false
       
         const updatedCart = this.state.cart.map((cartItem) => {
            if (cartItem.name == item.name) {
           
                  found =  true
              
              cartItem.quantity++;
              return cartItem;
            } else {
              return cartItem;
            }
          })
          if (!found) { updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1}) }  
          this.setState({
            cart: updatedCart

          })
        }


    render() {

      axios.get(`https://nit.tron.net.ua/api/product/list/category/`+this.state.categoryId).then(res => {
         const shopItems = res.data;
         this.setState({ items : shopItems });
       })

     
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
            {/* updateCartData = {this.updateCartData } */}
            <Header  updateData={this.updateData} cart={this.state.cart} counter={this.state.count}/>
          <main role="main" className="container maincontainer">
          
          <div className="row flex justify-content-around align-content-center align-items-center">
 
             {shopElements}
          </div>
         </main>
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