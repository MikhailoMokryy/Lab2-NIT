!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function c(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){var e;return o(this,t),(e=c(this,u(t).call(this))).state={data:[{id:"1",name:"Xiaomi Redmi Note 4",description:"Note 4",image_url:"https://i2.rozetka.ua/goods/2063802/xiaomi_redmi_note4_332_blk_not_www_images_2063802755.jpg",price:"5299.00",special_price:null},{id:"2",name:"Xiaomi Redmi Note 5",description:"Note 5",image_url:"https://i2.rozetka.ua/goods/4732882/copy_xiaomi_redmi_note5_4_64gb_black_5b165fbbd30e4_images_4732882888.jpg",price:"6199.00",special_price:"5999.00"},{id:"3",name:"iPhone X",description:"iPhone X smartphone",image_url:"https://i2.rozetka.ua/goods/2433232/apple_iphone_x_64gb_space_gray_images_2433232969.jpg",price:"25999.00",special_price:"24999.00"},{id:"4",name:"MacBook Air 13'' 1.8GHz 128GB (MQD32) 2017",description:"MacBook Air — на целый день свершений\r\nMacBook Air работает без подзарядки до 12 часов — это означает, что весь день вы свободны от проводов и розеток. Когда захочется отдохнуть, вы сможете смотреть фильмы в iTunes до 12 часов подряд. Кроме того, MacBook Air способен находиться в режиме ожидания до 30 дней. Вы можете сделать перерыв на несколько недель и вернуться к работе там же, где остановились.\r\nТонкий. Легкий. Мощный. И готов ко всему\r\nПроцессоры Intel Core i5 пятого поколения и графические процессоры Intel HD Graphics 6000 позволят вам решать любые задачи с невероятной скоростью: от редактирования фотографий до поиска в интернете. Все эти возможности помещаются в тонком корпусе unibody, толщина которого всего 1.7 см, а вес — 1.35 кг.\r\nПоддержка Wi‑Fi 802.11ac — легкие соединения\r\nMacBook Air мгновенно подключается к базовым станциям стандарта 802.11ac, таким как AirPort Extreme или AirPort Time Capsule. Скорость беспроводного соединения при этом в три раза выше, чем у Wi‑Fi предыдущего поколения. Помимо этого, стандарт 802.11ac предусматривает расширенную зону покрытия — вы почувствуете себя свободнее и мобильнее.\r\nДела идут отлично с SSD‑накопителем\r\nSSD-накопители MacBook Air работают до 17 раз быстрее, чем обычные жесткие диски ноутбуков с частотой 5400 об/мин. Любые задачи выполняются быстро и плавно. А благодаря сочетанию SSD‑накопителей и процессоров Intel Core 5‑го поколения MacBook Air выходит из режима сна еще быстрее, чем прежде.\r\nmacOS\r\nmacOS — это операционная система, которая стоит за всем, что вы делаете на своём Mac. В macOS Sierra вы сможете общаться с Siri, работать с фотографиями по‑новому и совершенно свободно переключаться между устройствами.",image_url:"https://i2.rozetka.ua/goods/7247395/53465688_images_7247395890.jpg",price:"25340.00",special_price:"24365.00"}]},e}return l(t,React.Component),a(t,[{key:"render",value:function(){return React.createElement("div",null,React.createElement(f,null),this.state.data.map(function(e,t){return React.createElement(m,{key:t,data:e})}))}}]),t}(),f=function(e){function t(){return o(this,t),c(this,u(t).apply(this,arguments))}return l(t,React.Component),a(t,[{key:"render",value:function(){return React.createElement("header",{className:"header"},React.createElement("h1",null,"Rusetka"))}}]),t}(),m=function(e){function t(){return o(this,t),c(this,u(t).apply(this,arguments))}return l(t,React.Component),a(t,[{key:"render",value:function(){return React.createElement("div",{className:"container-fluid"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-4"},React.createElement("div",null,this.props.data.id),React.createElement("div",null,this.props.data.name),React.createElement("img",{src:this.props.data.image_url}),React.createElement("div",null,this.props.data.description),React.createElement("div",null,this.props.data.price))))}}]),t}();ReactDOM.render(React.createElement(s,null),document.getElementById("app"))},function(e,t,r){}]);