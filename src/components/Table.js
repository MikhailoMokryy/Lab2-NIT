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
         categoryId: 1,
         cartItem: null,
         count: 0,
         itemCounter: 0
         }
      }

       componentDidMount() {
         axios.get(`https://nit.tron.net.ua/api/product/list`).then(res => {
            const shopItems = res.data;
            this.setState({ items : shopItems });
          })   
       }
      

       updateData = (id) => {
         console.log('-categoryId-',id)    
         this.setState({ categoryId: id })  
       } 


    render() {

      axios.get(`https://nit.tron.net.ua/api/product/list/category/`+this.state.categoryId).then(res => {
         const shopItems = res.data;
         this.setState({ items : shopItems });
       })

     
      const shopElements = this.state.items.map((item, i) => 
          <TableRow
                    key={i}
                    data = {item}
                    isOpen = {this.state.openDescriptionId === item.id}
                    onButtonClick = {this.handleClick.bind(this, item.id)}
                    onCartClick = {this.onClick.bind(this, item)}
                  //   updateCartData ={this.updateCartData }
          />   
      )
        
       return (
         <div>
            {/* updateCartData = {this.updateCartData } */}
            <Header  updateData={this.updateData}  cartItem={this.state.cartItem}  counter={this.state.count}/>
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


  onClick = (item) => {
   console.log('---',item.name)
      this.setState({
         count: this.state.count + 1,
         cartItem: item
     })
   
   console.log('id - ', item.id ,' count - ',this.state.count)
   }

 }

 

 export default Table