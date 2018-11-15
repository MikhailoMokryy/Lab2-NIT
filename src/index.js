import './scss/main.scss';

class App extends React.Component {
  constructor() {
     super();
     this.state = {
        data: 
       [{"id":"1","name":"Xiaomi Redmi Note 4","description":"Note 4","image_url":"https://i2.rozetka.ua/goods/2063802/xiaomi_redmi_note4_332_blk_not_www_images_2063802755.jpg","price":"5299.00","special_price":null},
       {"id":"2","name":"Xiaomi Redmi Note 5","description":"Note 5","image_url":"https://i2.rozetka.ua/goods/4732882/copy_xiaomi_redmi_note5_4_64gb_black_5b165fbbd30e4_images_4732882888.jpg","price":"6199.00","special_price":"5999.00"},
       {"id":"3","name":"iPhone X","description":"iPhone X smartphone","image_url":"https://i2.rozetka.ua/goods/2433232/apple_iphone_x_64gb_space_gray_images_2433232969.jpg","price":"25999.00","special_price":"24999.00"},
       {"id":"4","name":"MacBook Air 13'' 1.8GHz 128GB (MQD32) 2017","description":"MacBook Air — на целый день свершений\r\nMacBook Air работает без подзарядки до 12 часов — это означает, что весь день вы свободны от проводов и розеток. Когда захочется отдохнуть, вы сможете смотреть фильмы в iTunes до 12 часов подряд. Кроме того, MacBook Air способен находиться в режиме ожидания до 30 дней. Вы можете сделать перерыв на несколько недель и вернуться к работе там же, где остановились.\r\nТонкий. Легкий. Мощный. И готов ко всему\r\nПроцессоры Intel Core i5 пятого поколения и графические процессоры Intel HD Graphics 6000 позволят вам решать любые задачи с невероятной скоростью: от редактирования фотографий до поиска в интернете. Все эти возможности помещаются в тонком корпусе unibody, толщина которого всего 1.7 см, а вес — 1.35 кг.\r\nПоддержка Wi‑Fi 802.11ac — легкие соединения\r\nMacBook Air мгновенно подключается к базовым станциям стандарта 802.11ac, таким как AirPort Extreme или AirPort Time Capsule. Скорость беспроводного соединения при этом в три раза выше, чем у Wi‑Fi предыдущего поколения. Помимо этого, стандарт 802.11ac предусматривает расширенную зону покрытия — вы почувствуете себя свободнее и мобильнее.\r\nДела идут отлично с SSD‑накопителем\r\nSSD-накопители MacBook Air работают до 17 раз быстрее, чем обычные жесткие диски ноутбуков с частотой 5400 об/мин. Любые задачи выполняются быстро и плавно. А благодаря сочетанию SSD‑накопителей и процессоров Intel Core 5‑го поколения MacBook Air выходит из режима сна еще быстрее, чем прежде.\r\nmacOS\r\nmacOS — это операционная система, которая стоит за всем, что вы делаете на своём Mac. В macOS Sierra вы сможете общаться с Siri, работать с фотографиями по‑новому и совершенно свободно переключаться между устройствами.","image_url":"https://i2.rozetka.ua/goods/7247395/53465688_images_7247395890.jpg","price":"25340.00","special_price":"24365.00"}]
     }
  }
  render() {
     return (
        <div>
           <Header/> 
                 {this.state.data.map((item, i) => <TableRow key = {i} 
                    data = {item} />)}               
        </div>
     );
  }
}
class Header extends React.Component {
  render() {
     return (
        <header className="header">
           <h1>Rusetka</h1>
        </header>
     );
  }
}
class TableRow extends React.Component {
  render() {
     return (  
      <div className="container-fluid">   
         <div className ='row'>    
            <div className="col-md-4">
               <div>{this.props.data.id}</div>
               <div>{this.props.data.name}</div>
               <img src={this.props.data.image_url}></img>
               <div>{this.props.data.description}</div>
               <div>{this.props.data.price}</div>
            </div>
         </div>
      </div>
     );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app')
  );




// INITIAL STATE
// --------------------
// --> initialState
// 
// FUNCTIONS
// --------------------
// --> getOptionsArray
// 
// ACTIONS
// --------------------
// --> addToCart
// --> removeFromCart
// --> updateCartItem
// --> removeStockItem
// 
// REDUCERS
// --------------------
// ------> cartItem
// ----> cart
// ------> stockItem
// ----> stock
// --> reducers
// 
// COMPONENTS
// --------------------
// ------> Header
// ----> HeaderContainer
// ----------> ShopItem
// --------> ShopItems
// ------> ShopItemsContainer
// ----> Shop
// ----------> AddItem
// --------> AddItemContainer
// ------> Item
// ----> ItemContainer
// ----------> CartItem
// --------> CartItems
// --------> Total
// --------> PayButton
// ------> Cart
// ----> CartContainer
// ----> NoMatch
// --> App
