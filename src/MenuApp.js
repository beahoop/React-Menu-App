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
    types: ["Main", "Soup", "Dessert"],
    foodSelection: "All",
  }
  this.addOrderItem = this.addOrderItem.bind(this);
  this.filterFood = this.filterFood.bind(this);
}

// menuItems.filter(menuItem => menuItem.price ).reduce()

  componentDidMount(){
    const menuItems = [{
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
      title: "Miso Ramen ",
      desciption: "Miso broth with mushrooms, wakame seaweed and scallions. ",
      price: 12.50,
      type: "Soup",
    },{
      title: "Medicine Ball",
      desciption: "Honey sweetened cacao truffle with superfoods. Made by Asheville’s Silvermoon Chocolates ",
      price: 3.75,
      type: "Dessert",
    }]
    this.setState({ menuItems })
  }

  addOrderItem(menuItem){
    console.log(menuItem);

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
    // console.log(order[0].price);
    // console.log(order);
  }

  filterFood(event){
    const foodType = event.target.dataset.type;
    this.setState({foodSelection: foodType})
  }

  render (){
    const menuTypes = this.state.types.map((foodtype, index) => (
        <li key={index} className = "menuItem-item" >
        <button type="submit" onClick={this.filterFood} data-type={foodtype}>  {foodtype} </button>
         </li>
      ))
    return (
      < >
    <ul className="menuItem-list"> { menuTypes } </ul>

    <MenuList foodSelection={this.state.foodSelection} menuItems={this.state.menuItems} addOrderItem={this.addOrderItem}/>
      <OrderContainer order={this.state.order}/>
      </>
    )
  }
}



export default MenuApp;
