import React from 'react'
import axios from 'axios'
import {reactLocalStorage} from 'reactjs-localstorage'
import 'bootstrap/js/dist/dropdown'


class Cart extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isCardOpen: false, 
            success: false,   
            order:'name=Mike&email=naukma2020@gmail.com&phone=14881343&products[2]=5&products[4]=1&token=X8srQgVKzK1iPc17Hg_m',
            ids:[1,2,3,4,5,6,7,8,9]
        }
    }


    post = () =>{
        let _post ='name=Mike&email=naukma2020@gmail.com&phone=14881343'

        this.state.ids.map((item) => { 
            let cartItem = reactLocalStorage.getObject(item) 
            if( cartItem.quantity > 0){ 
            _post+= '&products['+cartItem.id +']='+ cartItem.quantity
                }
            }
          ) 
          _post+='&token=X8srQgVKzK1iPc17Hg_m'
          return _post
    }
    


    handleSubmit = event => {
        event.preventDefault()
         axios.post('https://nit.tron.net.ua/api/order/add',this.post()).then(
             this.setState({success:true}),
             reactLocalStorage.clear()
         )
             
      }
 
    render() {
         
         let count = 0
          const cartItems  =  this.state.ids.map((item) => { 
            let cartItem = reactLocalStorage.getObject(item)  
            if(cartItem.quantity!==undefined ){
                count+=cartItem.quantity
          return  <a  className="list-group-item d-flex justify-content-between align-items-center dropdown-item disabled" href="#"> <span class="d-inline-block text-truncate" style={{'max-width': '350px'}}>{ cartItem.name  }</span>  { cartItem.quantity > 1 ? <span className="badge badge-pill badge-primary"> {cartItem.quantity}</span> : ''}</a>}}) 
         
        

        return (   
            <li className="nav-item dropdown my-2 my-lg-0">
              <a className="nav-link dropdown-toggle btn btn-success btn-lg"  onClick={this.openCart} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {/* {  this.state.isCardOpen ? 'open' : 'close'  } */}
        Cart    <span className="badge badge-light"> {count}</span>
        </a>
        <div className="dropdown-menu dropdown-menu-right shadow p-3 mb-5 rounded" style={{'max-width': '600px'}} aria-labelledby="navbarDropdown">   
        <ul class="list-group">
        {cartItems}

         </ul>  
          
           
          <div className="dropdown-divider"></div>       
          <div className='ml-3'>    
                <button className="  btn  btn-outline-primary my-2 my-sm-0" onClick={ this.handleSubmit}>Submit</button>
                {this.state.success ? 'sent  ':''}    
                 </div>
                 </div>   
           </li>
        );
    }

    
    openCart = () =>{
        console.log(this.props.cart)
        console.log(this.props.counter)
        this.setState({
            isCardOpen: !this.state.isCardOpen
          })  
    }
}
export default Cart
