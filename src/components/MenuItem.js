import { Component } from 'react';


class MenuItem extends Component {

addToOrder(){
  console.log("Hi");
}

  render() {
    const menuItems = this.props.menuItems.map((menuItem, index) => (
        <li key={index} className = "menuItem-item" >
        <div className="menuItem-div">
        <h3 className="menuItem-list-title" name="title"> {menuItem.title} </h3>
        <p className="menuItem-list-text" name="desciption" > {menuItem.desciption} </p>
        <span name="price">${menuItem.price}</span>
        <button type="submit">Add Item</button>
        </div>
         </li>
      ))
      return(
        <ul className="menuItem-list"> { menuItems } </ul>
      )
    }
  }

export default MenuItem;
