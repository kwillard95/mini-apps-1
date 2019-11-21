class App extends React.Component {
  constructor() {
    super();
    this.state = {
      level: 0
    };
    this.userInfo = {};
    this.onCheckoutClick = this.onCheckoutClick.bind(this);
    this.onCreateAccountClick = this.onCreateAccountClick.bind(this);
    this.onShippingClick = this.onShippingClick.bind(this);
    this.onPaymentClick = this.onPaymentClick.bind(this);
  }

  onCheckoutClick(e) {
    e.preventDefault();
    this.setState({
      level: 1
    });
  }

  onCreateAccountClick(e) {
    e.preventDefault();
    this.setState({
      level: 2
    });
    var form = document.querySelector("form");

    for (var i = 0; i < form.elements.length; i++) {
      if (form.elements[i].name !== '' || form.elements[i].value !== '') {
        this.userInfo[form.elements[i].name] = form.elements[i].value;
      }
    }

    console.log(this.userInfo);
  }

  onShippingClick(e) {
    e.preventDefault();
    this.setState({
      level: 3
    });
    var form = document.querySelector("form");

    for (var i = 0; i < form.elements.length; i++) {
      if (form.elements[i].name !== '' || form.elements[i].value !== '') {
        this.userInfo[form.elements[i].name] = form.elements[i].value;
      }
    }

    console.log(this.userInfo);
  }

  onPaymentClick(e) {
    e.preventDefault();
    this.setState({
      level: 4
    });
    var form = document.querySelector("form");

    for (var i = 0; i < form.elements.length; i++) {
      if (form.elements[i].name !== '' || form.elements[i].value !== '') {
        this.userInfo[form.elements[i].name] = form.elements[i].value;
      }
    }

    console.log(this.userInfo);
    $.ajax({
      method: 'post',
      url: '/account',
      data: this.userInfo
    }).done(data => {
      console.log(data);
    });
  }

  render() {
    if (this.state.level === 0) {
      return React.createElement("button", {
        onClick: this.onCheckoutClick
      }, "Checkout Now");
    } else if (this.state.level === 1) {
      return React.createElement("form", null, React.createElement("div", null, "Name: ", React.createElement("input", {
        type: "text",
        name: "name"
      })), React.createElement("br", null), React.createElement("div", null, "Email: ", React.createElement("input", {
        type: "text",
        name: "email"
      })), React.createElement("br", null), React.createElement("div", null, "Password: ", React.createElement("input", {
        type: "password",
        name: "password"
      })), React.createElement("br", null), React.createElement("button", {
        onClick: this.onCreateAccountClick
      }, "Create Account"));
    } else if (this.state.level === 2) {
      return React.createElement("form", null, React.createElement("div", null, "Shipping Information:"), React.createElement("div", null, "Address: ", React.createElement("input", {
        type: "text",
        placeholder: "Line 1",
        name: "address1"
      })), React.createElement("div", null, "Address: ", React.createElement("input", {
        type: "text",
        placeholder: "Line 2",
        name: "address2"
      })), React.createElement("div", null, "City: ", React.createElement("input", {
        type: "text",
        placeholder: "City",
        name: "city"
      })), React.createElement("div", null, "State: ", React.createElement("input", {
        type: "text",
        placeholder: "State",
        name: "state"
      })), React.createElement("div", null, "Zip Code: ", React.createElement("input", {
        type: "number",
        placeholder: "Zip Code",
        name: "zip"
      })), React.createElement("div", null, "Phone Number: ", React.createElement("input", {
        type: "number",
        placeholder: "Phone Number",
        name: "phone"
      })), React.createElement("button", {
        onClick: this.onShippingClick
      }, "Submit Shipping Info"));
    } else if (this.state.level === 3) {
      return React.createElement("form", null, React.createElement("div", null, "Payment Information:"), React.createElement("div", null, "Credit Card Number: ", React.createElement("input", {
        type: "number",
        placeholder: "Credit Card Number",
        name: "cardnumber"
      })), React.createElement("div", null, "Expiration Date: ", React.createElement("input", {
        type: "date",
        placeholder: "Exp Date",
        name: "expdate"
      })), React.createElement("div", null, "CVV: ", React.createElement("input", {
        type: "number",
        placeholder: "CVV",
        name: "cvv"
      })), React.createElement("div", null, "Zip Code: ", React.createElement("input", {
        type: "number",
        placeholder: "Zip Code",
        name: "billzip"
      })), React.createElement("button", {
        onClick: this.onPaymentClick
      }, "Submit Payment Info"));
    } else if (this.state.level === 4) {
      return React.createElement("div", null, "Confirm Info");
    }
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("app")); // ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('app')
//   );
