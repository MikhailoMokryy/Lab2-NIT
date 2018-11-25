import '../scss/main.scss'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import Header from './Header'
import Table from './Table'

 
class App extends React.Component {


   render() {
      return (
        <div>
            <Header />
            <Table />
        </div>   
      );
   }
}

export default App