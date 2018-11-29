import React, {PureComponent} from 'react'
import Cart from './Cart'

class TableRow extends PureComponent {
   
   constructor(props) {
      super(props)


      this.state = {
          count: 1,
          item: null,
          itemId: null
      }
  }

    render() {
      const {data, isOpen, onButtonClick, onCartClick} = this.props

      let descrStr = data.description
      const desc = isOpen && <p className="card-text" style={{height: this.descrHeight(descrStr)}}>{descrStr}</p>

      const price = this.hasSpecialPrice(data.special_price)?<h3><span class="badge badge-danger">{data.special_price} грн</span>
      <h4><span class="badge badge-secondary "><del>{data.price} грн </del> </span></h4></h3>:<h3><span class="badge badge-secondary">{data.price} грн</span></h3>

      return (      
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
             <div className="card">              
                <img className="card-img-top mycard_img" src={data.image_url} alt={data.name}/>              
                <div className="card-body">
                   <h4 class="card-title">{data.name}</h4>                      
                   {/* this.props.data.description */}
                   { price }
                   { desc }                               
                        {/* clicked {this.state.count} */}
                        <button   onClick={this.addToCart}    className="btn btn-primary btn-md  float-left">
                       {'Buy'}                     
                        </button>
                   
                    <button onClick={onButtonClick} className="btn btn-info btn-md float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                   {/* <a href="#" className="btn btn-primary" onClick={onButtonClick}>{data.price} грн</a> */}
                </div>
             </div>
          </div>
       );
    }

    
    addToCart =() => {
      this.props.addToCart(this.props.data);
    }


    incrementCounter = () =>{
      this.setState({
         count: this.state.count + 1,
         
     })
  }

   descrHeight = (str) =>{
    return (str.length<=100)? 'auto' : '250px'
   }
   
   hasSpecialPrice = (price) =>{
      return (price===null)? false : true
   }

 }

 export default TableRow