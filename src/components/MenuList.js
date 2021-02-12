import { Component } from 'react';

class MenuList extends Component {
  constructor(props) {
  super(props);
  this.state = {
    selection: null,
  }
  this.handleClick = this.handleClick.bind(this);
}
  handleClick(event){
    const itemTitle = event.target.dataset.title;
    this.props.addOrderItem(itemTitle);
    console.log(itemTitle);
  }

    render() {
      const menuItems = this.props.menuItems
      .filter(menuItem => {
        if (this.props.foodSelection === "All") {
          return menuItem;
        }
          else {
          return menuItem.type === this.props.foodSelection
          }
        }
        ) //it takes a place holder... to say place in each item form the array
      //now look for placeholder.type... here I am doing a truly check.
      .map((menuItem, index) => (
          <li key={index} className = "menuItem-item" >
          <div className="menuItem-div">
          <h3 className="menuItem-list-title" name="title"> {menuItem.title} </h3>
          <p className="menuItem-list-text" name="desciption" > {menuItem.desciption} </p>
          <span name="price">${menuItem.price}</span>
          <button type="submit" data-title={menuItem.title} onClick={this.handleClick}>Add Item</button>
          </div>
           </li>
        ))
        return(
          <>

          <ul className="menuItem-list"> { menuItems } </ul>
          </>
        )
      }
    }

export default MenuList;
