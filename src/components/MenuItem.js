import { Component } from 'react';


class MenuItem extends Component {
  // constructor(props){
  //   super(props);
  // }

handleAdd(event){
  // const itemIndex = event.target.dataset.index
  // const findItem = this.state.menuItems.find(menuItems => menuItems.index === itemIndex);
  // console.log(findItem);
  console.log(event.target.dataset.index);
}

  render() {
    const menuItems = this.props.menuItems.map((menuItem, index) => (
        <li key={index} className = "menuItem-item" >
        <div className="menuItem-div">
        <h3 className="menuItem-list-title" name="title"> {menuItem.title} </h3>
        <p className="menuItem-list-text" name="desciption" > {menuItem.desciption} </p>
        <span name="price">${menuItem.price}</span>
        <button type="submit" data-index={index} onClick={this.handleAdd}>Add Item</button>
        </div>
         </li>
      ))
      return(
        <ul className="menuItem-list"> { menuItems } </ul>
      )
    }
  }

export default MenuItem;
