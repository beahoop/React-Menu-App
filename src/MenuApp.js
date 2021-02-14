import {Component} from 'react';
import './App.css';
import MenuList from './components/MenuList.js';
import OrderContainer from './components/OrderContainer.js';



class MenuApp extends Component {
  constructor(props) {
  super(props);
  this.state = {
    menuItems: [],
    order: [],
    types: ["All", "Main", "Soup", "Tea", "Dessert"],
    foodSelection: "All",
  }
  this.removeOrderItem = this.removeOrderItem.bind(this);
  this.minusOrderItem = this.minusOrderItem.bind(this);
  this.addOrderItem = this.addOrderItem.bind(this);
  this.filterFood = this.filterFood.bind(this);
}

// menuItems.filter(menuItem => menuItem.price ).reduce()

  componentDidMount(){
    const menuItems = [{
      title: "Forest Dragon",
      desciption: "Japanese matcha ad Chinese jasmine green tea with added mint, rice milk cardamom and honey",
      price: 5.25,
      type: "Tea",
    },{
      title: "Taiwanese Bubble Tea",
      desciption: "Tapioca bubbles with your choice of tea and your choice of milk",
      price: 5.25,
      type: "Tea",
    },{
      title: "The Golden Ticket",
      desciption: "A golden milk infusion of organic turmeric root, goji berry, coconut butter, all spice & rainbow pepper.Made with coconut, oat, or whole milk & local honey.",
      price: 5.00,
      type: "Tea",
    },{
      title: "Japanese Hotcha",
      desciption: "Organic Japanese matcha green tea simmered in your choice of milk, sweetened with local honey. ",
      price: 4.00,
      type: "Tea",
    },{
      title: "The West Village Bowl ",
      desciption: "Jasmine rice coated with your choice of tahini or peanut sauce sprinkled with toasted seeds and garnished with baby kale, shiitake mushrooms, beets, daikon, and kimchi.",
      price: 12.50,
      type: "Main",
    }, {
      title: "Ayurvedic Kitchari ",
      desciption: "Tridoshic turmeric-based mung dahl and basmati rice porridge with squash & carrots, garnished with apple chutney, raisins, and green onions. Choice of coconut oil (vegan option) or Happy Cow ghee",
      price: 9.50,
      type: "Main",
    },{
      title: "Spicy Tan Tan Ramen ",
      desciption: "Sesame, coconut, soy-based veggie broth with chili oil, topped with grilled corn, bamboo shoots, mushrooms, and green onions. Let your server know your preferred level of spice.",
      price: 12.50,
      type: "Soup"
    },{
      title: "Medicine Ball",
      desciption: "Honey sweetened cacao truffle with superfoods. Made by Asheville’s Silvermoon Chocolates ",
      price: 3.75,
      type: "Dessert",
    } ,{
      title: "Ayurvedic Kitchari ",
      desciption: "Tridoshic turmeric-based mung dahl and basmati rice porridge with squash & carrots, garnished with apple chutney, raisins, and green onions. Choice of coconut oil (vegan option) or Happy Cow ghee",
      price: 9.50,
      type: "Main",
    },{
      title: "Spicy Tan Tan Ramen ",
      desciption: "Sesame, coconut, soy-based veggie broth with chili oil, topped with grilled corn, bamboo shoots, mushrooms, and green onions. Let your server know your preferred level of spice.",
      price: 12.50,
      type: "Soup"
    },{
      title: "Medicine Ball",
      desciption: "Honey sweetened cacao truffle with superfoods. Made by Asheville’s Silvermoon Chocolates ",
      price: 3.75,
      type: "Dessert",
    }]
    this.setState({ menuItems })
  }

  addOrderItem(menuItem){
    const order = [...this.state.order];
    const index = order.findIndex(orderItem => orderItem.title === menuItem.title);
    if(index !== -1) {
      // menuITem already is more at least 1
      order[index].count += 1;//we added count as a key even tho it didn't exsit prior, because you can.... mdn
        console.log(order);
      // order is an array
      // menuItem is an object
    } else {
      menuItem.count = 1;
      order.push(menuItem);
    }
    this.setState({ order });
  }
  removeOrderItem(menuItem){
    const order = [...this.state.order];
    const index = order.indexOf(menuItem);
    order.splice(index, 1);
    this.setState({ order });
  }

minusOrderItem(menuItem){
    console.log(menuItem);
    const order = [...this.state.order];
    const index = order.findIndex(orderItem => orderItem.title === menuItem.title);
    if(index !== -1) {
      order[index].count -= 1;
        console.log(order);
    } else {
      menuItem.count = 0;
      order.push(menuItem);
    }
    this.setState({ order });
  }


  filterFood(event){
    const foodType = event.target.dataset.type;
    this.setState({foodSelection: foodType})
  }

  render (){
    const reducer = (totalPrice, currentPrice)=> totalPrice + currentPrice;
    const total = this.state.order.map(orderItem => orderItem.price * orderItem.count).reduce(reducer,0).toFixed(2)

    const menuTypes = this.state.types.map((foodtype, index) => (

        <li key={index} className = "nav-Item" >
        <button className="nav-button" onClick={this.filterFood} data-type={foodtype}>  {foodtype} </button>
         </li>
      ))
    return (
      <>

      <ul className="menuItem-nav">
<li>  <img onClick={this.filterFood} data-type="All" className="logo" src="https://images.squarespace-cdn.com/content/5cf962b426cecf0001f6c8b2/1559852836171-435VB9C0EHU5SNSNWFLL/dobra-logo.png?content-type=image%2Fpng" alt=""/> </li>
        { menuTypes }
        { this.state.order.length === 0
          ?
          <li className = "nav-Item"><button className="nav-button" onClick={this.filterFood} data-type="Cart">Cart </button></li>
          :
          <li className = "nav-Item"><button className="nav-button" onClick={this.filterFood} data-type="Cart">Cart ${ total } </button></li>
        }

      </ul>
      <div className="imagecontainer">
        {
          this.state.foodSelection === "All"
          ?
          <div className="imageheader" onClick={this.filterFood} data-type="All">
            </div>
          :
          null
        }
        {this.state.foodSelection === "Main"
          ?
          <div className="mainheader" onClick={this.filterFood} data-type="Main">
            </div>
          :
          null
        }
        {this.state.foodSelection === "Dessert"
          ?
          <div className="dessertheader" onClick={this.filterFood} data-type="Dessert">
            </div>
          :
          null
        }
        {this.state.foodSelection === "Soup"
          ?
          <div className="soupheader" onClick={this.filterFood} data-type="Soup">
            </div>
          :
          null
        }
        {this.state.foodSelection === "Cart"
          ?
          <div className="cartheader" onClick={this.filterFood} data-type="Cart">
            </div>
          :
          null
        }
        {this.state.foodSelection === "Tea"
          ?
          <div className="teaheader" onClick={this.filterFood} data-type="Tea">
            </div>
          :
          null
        }


      </div>
<div className="container" >
    <MenuList foodSelection={this.state.foodSelection} menuItems={this.state.menuItems} addOrderItem={this.addOrderItem}/>
    { this.state.foodSelection === "Cart"
      ?<OrderContainer menuItems={this.state.menuItems} addOrderItem={this.addOrderItem}
        removeOrderItem={this.removeOrderItem} minusOrderItem={this.minusOrderItem} order={this.state.order}/>
      :
      null
    }

    </div>
    </>
    )
  }
}



export default MenuApp;
