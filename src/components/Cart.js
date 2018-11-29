import React from 'react'
import axios from 'axios'
import {reactLocalStorage} from 'reactjs-localstorage'



class Cart extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isCardOpen: false,    
            order:'name=Mike&email=naukma2020@gmail.com&phone=14881343&products[2]=5&products[4]=1&token=X8srQgVKzK1iPc17Hg_m'
            // {token:'X8srQgVKzK1iPc17Hg_m',name:'MikeMokryy',phone:'14881343',email:'naukma2020@gmail.com',products:['hi']}  
        }
    }

    handleSubmit = event => {
        event.preventDefault(); 
         axios.post('http://nit.tron.net.ua/api/order/add', this.state.order)      
      }
 
    render() {
        const { cart, counter} = this.props;
        return (   
        <div className={" Cart " + (this.state.isCardOpen ? "Cart-Open" : "")}  >
        <h2 className="badge badge-success Title" onClick={this.openCart} >Cart  <span className="badge badge-light"> {counter}</span></h2>
        <div>
            <br/>
          {cart.length > 0 ? cart.map((item) => {
          return <p>{item.name  }  { item.quantity > 1 ? <span className="badge badge-primary"> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
          </div>
          <div class="dropdown-divider"></div>
          <button className="btn btn-primary" onClick={ this.handleSubmit}>Submit</button>
           </div>

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
