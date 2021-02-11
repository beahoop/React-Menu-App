import { Component } from 'react';
import OrderList from './OrderList.js';
import OrderItem from './OrderItem.js';
import OrderForm from './OrderForm.js';


class OrderContainer extends Component {
  render() {
    return (
      <>
      <OrderList />
      <OrderItem />
      <OrderForm />
      </>
    )
  }
}

export default OrderContainer;
