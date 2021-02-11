import { Component } from 'react';
// import MenuList from './MenuList.js';
import MenuItem from './MenuItem.js';
      // <MenuList menuItems={this.props.menuItems}/>


class MenuContainer extends Component {
  render() {
    return (
      <>

      <MenuItem menuItems={this.props.menuItems}/>
      </>
    )
  }
}

export default MenuContainer;
