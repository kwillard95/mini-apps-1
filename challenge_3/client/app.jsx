
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      level: 0,
    }
    this.userInfo = {};

    this.onCheckoutClick = this.onCheckoutClick.bind(this)
    this.onCreateAccountClick = this.onCreateAccountClick.bind(this)
    this.onShippingClick = this.onShippingClick.bind(this)
    this.onPaymentClick = this.onPaymentClick.bind(this)
 }

 onCheckoutClick(e) {
   e.preventDefault();
   this.setState({
     level: 1
   })
 }

 onCreateAccountClick(e) {
  e.preventDefault();
   this.setState({
     level: 2
   })

   var form = document.querySelector("form");

    for (var i = 0; i < form.elements.length; i++) {
      if (form.elements[i].name !== '' || form.elements[i].value !== '') {
        this.userInfo[form.elements[i].name] = form.elements[i].value;
      }
    }
    console.log(this.userInfo)
 }

 onShippingClick(e) {
   e.preventDefault();
   this.setState({
     level: 3
   })

   var form = document.querySelector("form");

    for (var i = 0; i < form.elements.length; i++) {
      if (form.elements[i].name !== '' || form.elements[i].value !== '') {
        this.userInfo[form.elements[i].name] = form.elements[i].value;
      }
    }
    console.log(this.userInfo)
 }

 onPaymentClick(e) {
  e.preventDefault();
  this.setState({
    level: 4
  })
  var form = document.querySelector("form");

  for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].name !== '' || form.elements[i].value !== '') {
      this.userInfo[form.elements[i].name] = form.elements[i].value;
    }
}

console.log(this.userInfo)

 $.ajax({
          method: 'post',
          url: '/account',
          data: this.userInfo,
        }).done(data => {
          console.log(data);
        });

}

 render() {
   if (this.state.level === 0) {
     return(
       <button onClick={this.onCheckoutClick}>Checkout Now</button>
     )
   } 
   else if(this.state.level === 1) {
     return (
       <form>
         <div>Name: <input type="text" name="name"></input></div><br />
         <div>Email: <input type="text" name="email"></input></div><br />
         <div>Password: <input type="password" name="password"></input></div><br />
         <button onClick={this.onCreateAccountClick}>Create Account</button>
       </form>
      )
    } 
   else if (this.state.level === 2) {
     return (
     <form>
       <div>Shipping Information:</div> 
       <div>Address: <input type="text" placeholder="Line 1" name="address1"></input></div>
       <div>Address: <input type="text" placeholder="Line 2" name="address2"></input></div>
       <div>City: <input type="text" placeholder="City" name="city"></input></div>
       <div>State: <input type="text" placeholder="State" name="state"></input></div>
       <div>Zip Code: <input type="number" placeholder="Zip Code" name="zip"></input></div>
       <div>Phone Number: <input type="number" placeholder="Phone Number" name="phone"></input></div>
       <button onClick={this.onShippingClick}>Submit Shipping Info</button>
     </form>
     )
   } else if (this.state.level === 3) {
     return (
       <form>
      <div>Payment Information:</div> 
      <div>Credit Card Number: <input type="number" placeholder="Credit Card Number" name="cardnumber"></input></div>
      <div>Expiration Date: <input type="date" placeholder="Exp Date" name="expdate"></input></div>
      <div>CVV: <input type="number" placeholder="CVV" name="cvv"></input></div>
      <div>Zip Code: <input type="number" placeholder="Zip Code" name="billzip"></input></div>
      <button onClick={this.onPaymentClick}>Submit Payment Info</button>
      </form>
     )
   } else if (this.state.level === 4) {
     return (
       <div>Confirm Info</div>
     )
   }
 }
}



ReactDOM.render(<App />, document.getElementById("app"))

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('app')
//   );