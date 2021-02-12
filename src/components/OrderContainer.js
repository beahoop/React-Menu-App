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
  const name = [...this.state.text]
  name.push(event);
  this.setState({ name })
}

//if thse things already exsit then add a number to it not
// 1: {this.order: 2};

handleInput(event){
  this.setState({ [event.target.name]: event.target.value });
  //event.target.name is targeting the name="text" on the input
}

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
        <p>{orderItem.count}</p>
        <button>Edit</button>
        <button>Delete</button>
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
