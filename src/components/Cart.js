import React from 'react'
import axios from 'axios'
import {reactLocalStorage} from 'reactjs-localstorage'



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


    post = ()=>{
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
        //   this.setState({order: _post}) 
    }
    


    handleSubmit = event => {
        // this.post()
        event.preventDefault()
         axios.post('https://nit.tron.net.ua/api/order/add',this.post()).then(
             this.setState({success:true})
         )
             
      }
 
    render() {
        const { cart, counter} = this.props;
         
           let count = 0
        const cartItems =    this.state.ids.map((item) => { 
            let cartItem = reactLocalStorage.getObject(item)  
          return <p>{ cartItem.name  }  { cartItem.quantity > 1 ? <span className="badge badge-pill badge-primary h4"> {cartItem.quantity}</span> : ''}</p> }) 
        
        if(counter!==0)  reactLocalStorage.setObject('counter',counter)
        

        return (   
        <div className={" Cart " + (this.state.isCardOpen ? "Cart-Open" : "")}  >
        <button className="btn btn-success  btn-lg Title" onClick={this.openCart}>Cart  <span className="badge badge-light"> {counter}</span></button>
        <div>
            <br/>
            {cartItems}
          </div>
          
          <div class="dropdown-divider"></div>
            {this.state.success ? 'sent  ':''}
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
