import { Component } from 'react';

class OrderContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    text: "",
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInput = this.handleInput.bind(this);

  }

handleSubmit(event){
  event.preventDefault();
  const order = {
    name: this.state.text,
    order: [...this.props.order]
  }
  console.log('order', order);
  localStorage.setItem("order", JSON.stringify(order));
  alert(`Thank you ${this.state.text} for your order! Your order will be ready for pick up in 25 mintues.`);
}

//if thse things already exsit then add a number to it not
// 1: {this.order: 2};
handleInput(event){
  this.setState({ [event.target.name]: event.target.value });
  //event.target.name is targeting the name="text" on the input
}


  render() {

    const reducer = (totalPrice, currentPrice)=> totalPrice + currentPrice;
    const total = this.props.order.map(orderItem => orderItem.price * orderItem.count).reduce(reducer,0).toFixed(2)
    console.log(total);


    const orderItems = this.props.order
    .map((orderItem, index) => (
        <li key={index} className = "orderItem-item" >
        <div className="orderItem-div">
        <h3 className="orderItem-list-title" name="title"> {orderItem.title} </h3>
        <span name="price">${orderItem.price.toFixed(2)}</span>
        <div className="orderItem-edit">
      <button type="submit" data-title={orderItem.title} onClick={() => {
          if(orderItem.count > 1){
            this.props.minusOrderItem(orderItem)
          }
          else {
            this.props.removeOrderItem(orderItem)
          }
        }
      }>-</button>
          <span > {orderItem.count} </span>
        <button type="submit" data-title={orderItem.title} onClick={() => this.props.addOrderItem(orderItem)}>+</button>
        <button type="submit" onClick={() => this.props.removeOrderItem(orderItem)}> Remove</button>
      </div>
      </div>
         </li>
      ))
      return(

        <div className="orderItem-container">
        <div className="yourOrder">Your Order</div>
        <ul className="orderItem-list"> { orderItems } </ul>

        <form className="order-form">
              <div>ORDER TOTAL: ${ total }</div>
          <label htmlFor="order-name"></label>
        <input type="text" id="order-name" placeholder="Name" name="text" value={this.state.text} onChange={this.handleInput} required></input>
        <button type="submit" name="name" onClick={this.handleSubmit}>Submit</button>
        </form>
        </div>

      )
    }
  }

export default OrderContainer;
