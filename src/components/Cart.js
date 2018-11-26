import React from 'react'

class Cart extends React.PureComponent {


    constructor(props) {
        super(props) 
        
        this.state = {
          cardItems: []  ,
          quantity: null,
          cartItemId: 1488
      }

    }


    render() {
        const {quantity} = this.props;
   //console.log('eee ',this.state.cardItems);
       return (
                <form className="form-inline mt-2 mt-md-0 mr-10">
                   <button  className="btn float-right   btn-success" type="submit">Cart({quantity})</button>
                   
                </form>
            
       );
    }
 }


 export default Cart