(this["webpackJsonpreact-menu-app"]=this["webpackJsonpreact-menu-app"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),a=i(9),s=i.n(a),o=(i(15),i(7)),c=i(3),l=i(4),d=i(2),u=i(6),m=i(5),h=(i(16),i(0)),p=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).state={selection:null},n}return Object(l.a)(i,[{key:"render",value:function(){var e=this,t=this.props.menuItems.filter((function(t){return"All"===e.props.foodSelection?t:t.type===e.props.foodSelection})).map((function(t,i){return Object(h.jsx)("li",{className:"menuItem-item",children:Object(h.jsxs)("div",{className:"menuItem-div",children:[Object(h.jsxs)("p",{className:"menuList-title",name:"title",children:[" ",t.title," "]}),Object(h.jsxs)("p",{className:"menuList-desc",name:"desciption",children:[" ",t.desciption," "]}),Object(h.jsxs)("span",{className:"menuList-price",name:"price",children:["$",t.price.toFixed(2)]}),Object(h.jsx)("button",{type:"submit","data-title":t.title,onClick:function(){return e.props.addOrderItem(t)},children:"Add"})]})},i)}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:"menuItem-list",children:[" ",t]})})}}]),i}(n.Component),b=i(10),j=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).state={text:""},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleInput=n.handleInput.bind(Object(d.a)(n)),n}return Object(l.a)(i,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:this.state.text,order:Object(o.a)(this.props.order)};console.log("order",t),localStorage.setItem("order",JSON.stringify(t)),alert("Thank you ".concat(this.state.text," for your order! Your order will be ready for pick up in 25 mintues."))}},{key:"handleInput",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.props.order.map((function(e){return e.price*e.count})).reduce((function(e,t){return e+t}),0).toFixed(2);console.log(t);var i=this.props.order.map((function(t,i){return Object(h.jsx)("li",{className:"orderItem-item",children:Object(h.jsxs)("div",{className:"orderItem-div",children:[Object(h.jsxs)("h3",{className:"orderItem-list-title",name:"title",children:[" ",t.title," "]}),Object(h.jsxs)("span",{name:"price",children:["$",t.price.toFixed(2)]}),Object(h.jsxs)("div",{className:"orderItem-edit",children:[Object(h.jsx)("button",{type:"submit","data-title":t.title,onClick:function(){t.count>1?e.props.minusOrderItem(t):e.props.removeOrderItem(t)},children:"-"}),Object(h.jsxs)("span",{children:[" ",t.count," "]}),Object(h.jsx)("button",{type:"submit","data-title":t.title,onClick:function(){return e.props.addOrderItem(t)},children:"+"}),Object(h.jsx)("button",{type:"submit",onClick:function(){return e.props.removeOrderItem(t)},children:" Remove"})]})]})},i)}));return Object(h.jsxs)("div",{className:"orderItem-container",children:[Object(h.jsx)("div",{className:"yourOrder",children:"Your Order"}),Object(h.jsxs)("ul",{className:"orderItem-list",children:[" ",i," "]}),Object(h.jsxs)("form",{className:"order-form",children:[Object(h.jsxs)("div",{children:["ORDER TOTAL: $",t]}),Object(h.jsx)("label",{htmlFor:"order-name"}),Object(h.jsx)("input",{type:"text",id:"order-name",placeholder:"Name",name:"text",value:this.state.text,onChange:this.handleInput,required:!0}),Object(h.jsx)("button",{type:"submit",name:"name",onClick:this.handleSubmit,children:"Submit"})]})]})}}]),i}(n.Component),O=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).state={menuItems:[],order:[],types:["All","Main","Soup","Tea","Dessert"],foodSelection:"All"},n.removeOrderItem=n.removeOrderItem.bind(Object(d.a)(n)),n.minusOrderItem=n.minusOrderItem.bind(Object(d.a)(n)),n.addOrderItem=n.addOrderItem.bind(Object(d.a)(n)),n.filterFood=n.filterFood.bind(Object(d.a)(n)),n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.setState({menuItems:[{title:"Forest Dragon",desciption:"Japanese matcha ad Chinese jasmine green tea with added mint, rice milk cardamom and honey",price:5.25,type:"Tea"},{title:"Taiwanese Bubble Tea",desciption:"Tapioca bubbles with your choice of tea and your choice of milk",price:5.25,type:"Tea"},{title:"The Golden Ticket",desciption:"A golden milk infusion of organic turmeric root, goji berry, coconut butter, all spice & rainbow pepper.Made with coconut, oat, or whole milk & local honey.",price:5,type:"Tea"},{title:"Japanese Hotcha",desciption:"Organic Japanese matcha green tea simmered in your choice of milk, sweetened with local honey. ",price:4,type:"Tea"},{title:"Tempeh Banh Mi",desciption:"Smiling Hara tempeh marinated then grilled with gluten free bread dressed with sriracha mayo, cucumber, cilantro, carrot-daikon pickle, & baby kale. ",price:9.75,type:"Main"},{title:"The West Village Bowl ",desciption:"Jasmine rice coated with your choice of tahini or peanut sauce sprinkled with toasted seeds and garnished with baby kale, shiitake mushrooms, beets, daikon, and kimchi.",price:12.5,type:"Main"},{title:"Ayurvedic Kitchari ",desciption:"Tridoshic turmeric-based mung dahl and basmati rice porridge with squash & carrots, garnished with apple chutney, raisins, and green onions. Choice of coconut oil (vegan option) or Happy Cow ghee",price:9.5,type:"Main"},{title:"Spicy Tan Tan Ramen",desciption:"Sesame, coconut, soy-based veggie broth with chili oil, topped with grilled corn, bamboo shoots, mushrooms, and green onions. Let your server know your preferred level of spice. ",price:12.5,type:"Soup"},{title:"Miso Ramen",desciption:"Miso broth with mushrooms, wakame seaweed and scallions. ",price:12.5,type:"Soup"},{title:"Japanese Miso",desciption:"Sweet white organic broth with mushrooms & wakame seaweed topped with scallions. ",price:9,type:"Soup"},{title:"Oatmeal Cream Pie ",desciption:"Sweetened with cane sugar. Contains dairy & eggs",price:4,type:"Dessert"},{title:"Medicine Ball",desciption:"Honey sweetened cacao truffle with superfoods. Made by Asheville\u2019s Silvermoon Chocolates ",price:3.75,type:"Dessert"}]})}},{key:"addOrderItem",value:function(e){var t=Object(o.a)(this.state.order),i=t.findIndex((function(t){return t.title===e.title}));-1!==i?(t[i].count+=1,console.log(t)):(e.count=1,t.push(e)),this.setState({order:t})}},{key:"removeOrderItem",value:function(e){var t=Object(o.a)(this.state.order),i=t.indexOf(e);t.splice(i,1),this.setState({order:t})}},{key:"minusOrderItem",value:function(e){console.log(e);var t=Object(o.a)(this.state.order),i=t.findIndex((function(t){return t.title===e.title}));-1!==i?(t[i].count-=1,console.log(t)):(e.count=0,t.push(e)),this.setState({order:t})}},{key:"filterFood",value:function(e){var t=e.target.dataset.type;this.setState({foodSelection:t})}},{key:"render",value:function(){var e=this,t=this.state.order.map((function(e){return e.price*e.count})).reduce((function(e,t){return e+t}),0).toFixed(2),i=this.state.types.map((function(t,i){return Object(h.jsx)("li",{className:"nav-Item",children:Object(h.jsxs)("button",{className:"nav-button",onClick:e.filterFood,"data-type":t,children:["  ",t," "]})},i)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("ul",{className:"menuItem-nav",children:[Object(h.jsxs)("li",{children:["  ",Object(h.jsx)("img",{onClick:this.filterFood,"data-type":"All",className:"logo",src:"https://images.squarespace-cdn.com/content/5cf962b426cecf0001f6c8b2/1559852836171-435VB9C0EHU5SNSNWFLL/dobra-logo.png?content-type=image%2Fpng",alt:""})," "]}),i,0===this.state.order.length?Object(h.jsx)("li",{className:"nav-Item",children:Object(h.jsx)("button",{className:"nav-button cart",onClick:this.filterFood,"data-type":"Cart",children:"Cart "})}):Object(h.jsx)("li",{className:"nav-Item",children:Object(h.jsxs)("button",{className:"nav-button cart",onClick:this.filterFood,"data-type":"Cart",children:["Cart $",t," "]})})]}),Object(h.jsxs)("div",{className:"imagecontainer",children:["All"===this.state.foodSelection?Object(h.jsx)("div",{className:"imageheader",onClick:this.filterFood,"data-type":"All"}):null,"Main"===this.state.foodSelection?Object(h.jsx)("div",{className:"mainheader",onClick:this.filterFood,"data-type":"Main"}):null,"Dessert"===this.state.foodSelection?Object(h.jsx)("div",{className:"dessertheader",onClick:this.filterFood,"data-type":"Dessert"}):null,"Soup"===this.state.foodSelection?Object(h.jsx)("div",{className:"soupheader",onClick:this.filterFood,"data-type":"Soup"}):null,"Cart"===this.state.foodSelection?Object(h.jsx)("div",{className:"cartheader",onClick:this.filterFood,"data-type":"Cart"}):null,"Tea"===this.state.foodSelection?Object(h.jsx)("div",{className:"teaheader",onClick:this.filterFood,"data-type":"Tea"}):null]}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(p,{foodSelection:this.state.foodSelection,menuItems:this.state.menuItems,addOrderItem:this.addOrderItem}),"Cart"===this.state.foodSelection?Object(h.jsx)(j,{menuItems:this.state.menuItems,addOrderItem:this.addOrderItem,removeOrderItem:this.removeOrderItem,minusOrderItem:this.minusOrderItem,order:this.state.order}):null]})]})}}]),i}(n.Component),f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.630b8423.chunk.js.map