import { Component } from 'react';
import MenuItem from './MenuItem.js'

class MenuList extends Component {
  render() {
    return (
      <>
      <MenuItem menuItems={this.props.menuItems}/>
      I am menu list! <br/>
      </>
    )
  }
}

export default MenuList;
