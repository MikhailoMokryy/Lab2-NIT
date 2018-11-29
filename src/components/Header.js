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
      console.log(this.props)
      const shopElements = this.state.categories.map((item) => 
      <div className="navbar-nav  categories ml-4 mr-4" onClick={() => { this.props.updateData(item.id), console.log('-id-',item.id)}} >
      <a  className="nav-link"   href="#"> { item.name } </a>
      </div>
      )

     
      return (
         <div>        
           
               <nav className='navbar fixed-top navbar-dark bg-dark'>
               <a className="navbar-brand" href="#"  onClick={() => { this.props.updateData(0)}}><p className="h1">Rusetka</p></a>  
              
               <div className="row flex nav-it align-content-start align-items-start ">
               { shopElements}     
               </div>  
                              
            </nav>     
            <Cart isOpen={this.isOpen} cart={ cart} counter={counter}/>  
         </div>
      );
   }
   
}

export default Header