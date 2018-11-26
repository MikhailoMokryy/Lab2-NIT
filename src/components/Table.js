import React from 'react'
import TableRow from './TableRow'
import axios from 'axios'


class Table extends React.PureComponent {
   constructor() {
      super();
      this.state = {
         items: [] ,
         openDescriptionId: null
         }
      }

       componentDidMount() {
         axios.get(`http://nit.tron.net.ua/api/product/list`).then(res => {
             const shopItems = res.data;
             this.setState({ items : shopItems });
           })
       }
       

    render() {
      const shopElements = this.state.items.map((item, i) => 
          <TableRow
                    key={i}
                    data = {item}
                    isOpen = {this.state.openDescriptionId === item.id}
                    onButtonClick = {this.handleClick.bind(this, item.id)}
          />
      
      )

       return (
         
          <main role="main" className="container maincontainer">
          <div className="row flex justify-content-around align-content-center align-items-center">
             {shopElements}
          </div>
      </main>
       );
    } 

    handleClick = openDescriptionId => this.setState({
      openDescriptionId: this.state.openDescriptionId === openDescriptionId ? null : openDescriptionId
  })
 }

 export default Table;