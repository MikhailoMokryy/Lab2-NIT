import React, {PureComponent} from 'react'


class TableRow extends PureComponent {
   
   constructor(props) {
      super(props)


      this.state = {
          count: 0
      }
  }

  

    render() {
      const {data, isOpen, onButtonClick} = this.props

      let descrStr = data.description
      const desc = isOpen && <p className="card-text" style={{height: this.descrHeight(descrStr)}}>{descrStr}</p>
       return (
        
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
 
             <div className="card">
 
                <img className="card-img-top mycard_img" src={data.image_url} alt="Card image cap" />
 
                <div className="card-body">
                   <h4 class="card-title">{data.name}</h4>
                   <h3><span class="badge badge-secondary">{data.price} грн</span></h3>
                   {/* this.props.data.description */}
                   {/* <p className="card-text">{data.description}</p> */}
                   { desc }
                   <h4 onClick = {this.incrementCounter}>
                        {/* clicked {this.state.count} */}
                        <button onClick={onButtonClick} className="btn btn-primary btn-md float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h4>
                   {/* <a href="#" className="btn btn-primary" onClick={onButtonClick}>{data.price} грн</a> */}
 
                </div>
             </div>
          </div>
       );
    }


    incrementCounter = () =>{
      const itemId =  this.props.data.id
      this.setState({
          count: this.state.count + 1
      })
      console.log('id - ', itemId ,' count - ',this.state.count);
  }

   descrHeight = (str) =>{
    return (str.length<=100)? 'auto' : '250px'
   }
 }

 export default TableRow