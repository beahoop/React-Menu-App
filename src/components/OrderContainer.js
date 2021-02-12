import { Component } from 'react';



class OrderContainer extends Component {
  render() {
    const reducer = (totalPrice, currentPrice)=> totalPrice + currentPrice;
    const total = this.props.order.map(orderItem => orderItem.price).reduce(reducer,0)
    console.log(total);

    const orderItems = this.props.order
    .map((orderItem, index) => (
        <li key={index} className = "orderItem-item" >
        <div className="orderItem-div">
        <h3 className="orderItem-list-title" name="title"> {orderItem.title} </h3>
        <p className="orderItem-list-text" name="desciption" > {orderItem.desciption} </p>
        <span name="price">${orderItem.price}</span>
        </div>
         </li>
      ))
      return(
        <>
        <div>ORDER LIST</div>
        <ul className="menuItem-list"> { orderItems } </ul>
        <div>TOTAL{ total }</div>
        </>
      )
    }
  }

export default OrderContainer;
