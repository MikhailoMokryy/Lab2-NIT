import React from 'react'
import {reactLocalStorage} from 'reactjs-localstorage'


class Cart extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            isCardOpen: false  
        }

    }

   
    render() {
        const { cartItem, counter } = this.props;


        return (          
         <div  onClick={() => { this.props.isOpen(this.state.isCardOpen) }}  className="cart_container">
                <button  onClick={this.onCartClick}  className="btn btn-default float-right bg-success" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Cart <span className="badge badge-light"> {counter}</span>
                </button>            
        </div>   
        );
    }

    
    onCartClick = () =>{
        if(this.props.cartItem!==null){
        this.state.isCardOpen? this.setState({isCardOpen:false}):this.setState({isCardOpen:true})       
    }
}
}
export default Cart
