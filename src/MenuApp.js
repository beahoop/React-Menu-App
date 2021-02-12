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
  }
  this.addOrderItem = this.addOrderItem.bind(this);
}

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
    }]
    this.setState({ menuItems })
  }

  handleSelection(event){
    const tag = event.target.dataset.tags;
    const filteredlink =
     this.state.links.filter(links => links.tags === tag);
    this.setState({selection: filteredlink})
    console.log(filteredlink);
  }

  addOrderItem(orderTitle){
    const orderItem = this.state.menuItems.find(menuItems => menuItems.title === orderTitle);
    const order = [...this.state.order, orderItem];
    this.setState({ order })
    console.log(order[0].price);
    console.log({ order });
  }

  render (){
    return (
      < >
      This is the App!<br/>
    <MenuList menuItems={this.state.menuItems} addOrderItem={this.addOrderItem}/>
      <OrderContainer />
      </>
    )
  }
}



export default MenuApp;
