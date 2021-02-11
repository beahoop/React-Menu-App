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

  render (){
    return (
      < >
      This is the App!<br/>
    <MenuList menuItems={this.state.menuItems}/>
    
      <OrderContainer />
      </>
    )
  }
}



export default MenuApp;
