import { Component } from 'react';

class MenuList extends Component {
  constructor(props) {
  super(props);
  this.state = {
    selection: null,
  }
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
          <p className="menuList-title" name="title"> {menuItem.title} </p>
          <p className="menuList-desc" name="desciption" > {menuItem.desciption} </p>
            <span className="menuList-price" name="price">${menuItem.price.toFixed(2)}</span>
            <button type="submit" data-title={menuItem.title} onClick={() => this.props.addOrderItem(menuItem)}>Add</button>


          </div>
           </li>
        ))
        return(
          <>

          <ul className="menuItem-list"> { menuItems }

          </ul>


        </>
        )
      }
    }

export default MenuList;
