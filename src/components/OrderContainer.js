import { Component } from 'react';

class OrderContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    text: "",
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.handleStepUp = this.handleStepUp.bind(this);

  }

handleSubmit(event){
  event.preventDefault();
  const order = {
    name: this.state.text,
    order: [...this.props.order]
  }
  console.log('order', order);
  localStorage.setItem("order", JSON.stringify(order));
  alert(`Thank you ${this.state.text}! Your ${this.props.orders}`);
}

//if thse things already exsit then add a number to it not
// 1: {this.order: 2};

handleInput(event){
  this.setState({ [event.target.name]: event.target.value });
  //event.target.name is targeting the name="text" on the input
}
// <input type="number"  value={orderItem.count} step="1" onChange={this.handleStepUp}></input>
handleStepUp(event){
  //if step up is selected then add another to order.count
// const input = event.target;
// let value = event.target.value;
// const price = event.target.dataset.price;
// const subtotal =  value * price;

// this.props.addOrderItem();
// value * price - presubtotal;
// const total = [...this.state.total, subtotal]
// console.log("price", price, "subtotal", subtotal);
}
// removeItem(item){
//   const order = [...this.props.order];
//   const index = order.indexOf(item);
//   order.splice(index, 1);
//   console.log(order.count);
//   order.count = (order.count - 1);
//   this.setState({ order });
//   console.log(order);
// }

// handleClick(){
//   // const itemTitle = event.target.dataset.title;
//   this.props.addOrderItem(itemTitle);
//
//   console.log("order-count", this.props.order[0].count);
//   // console.log(itemTitle);
// }


  render() {

    // const duplicateItems = this.props.order.map(orderItem => orderItem.title)
    // const count = {};
    // console.log('duplicateItems', duplicateItems);
    // duplicateItems.forEach((i) => count[i] = (count[i] || 0) + 1);
    // console.log(count);
    const reducer = (totalPrice, currentPrice)=> totalPrice + currentPrice;
    const total = this.props.order.map(orderItem => orderItem.price * orderItem.count).reduce(reducer,0)
    console.log(total);


    const orderItems = this.props.order
    .map((orderItem, index) => (


        <li key={index} className = "orderItem-item" >
        <div className="orderItem-div">
        <h3 className="orderItem-list-title" name="title"> {orderItem.title} </h3>
        <p className="orderItem-list-text" name="desciption" > {orderItem.desciption} </p>
        <span name="price">${orderItem.price}</span>

      <button type="submit" data-title={orderItem.title} onClick={() => this.props.removeOrderItem(orderItem)}>-</button>
{ orderItem.count >= 1
  ?  <span > {orderItem.count} </span>
  :
  <span></span>
}


        <button type="submit" data-title={orderItem.title} onClick={() => this.props.addOrderItem(orderItem)}>+</button>


        </div>
         </li>
      ))
      return(
        <>
        <div>ORDER LIST</div>
        <ul className="menuItem-list"> { orderItems } </ul>
        <div>TOTAL{ total }</div>
        <form>
          <label htmlFor="order-name"></label>
        <input type="text" id="order-name" placeholder="Name" name="text" value={this.state.text} onChange={this.handleInput} required ></input>
        <button type="submit" name="name" onClick={this.handleSubmit}>Submit</button>
        </form>
        </>
      )
    }
  }

export default OrderContainer;
