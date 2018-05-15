import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    twenties:'0',
    tens:'0',
    fives:'0',
    ones:'0',
    quarters:'0',
    dimes:'0',
    nickels:'0',
    pennies:'0',
    changeDue:'0',
    amountDue: '',
    amountReceived: '',
    },
    
    this.changeAmountDue = this.changeAmountDue.bind(this);
    this.changeAmountReceived = this.changeAmountReceived.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

changeAmountDue(evt1){
  this.setState({ amountDue: evt1.target.value })
}

changeAmountReceived(evt2){
  this.setState({ amountReceived: evt2.target.value})

}

calculateChange(){
      var amountDue = this.state.amountDue;
      var amountReceived = this.state.amountReceived;
      var changeAmount = amountReceived - amountDue;
      this.setState({changeDue: changeAmount.toFixed(2)});
      
      
      if (amountReceived < amountDue){
          alert("You don't have enough money!");
  
       } else if (amountReceived === amountDue){
          alert("No change due.");
      
      } else {
          
          var twentyDollarAmount = Math.floor(changeAmount/20);
          this.setState({ twenties: twentyDollarAmount});
          changeAmount = (changeAmount%20).toFixed(2);

          var tenDollarAmount = Math.floor(changeAmount/10);
          this.setState({ tens: tenDollarAmount});
          changeAmount = (changeAmount%10).toFixed(2);

          var fiveDollarAmount = Math.floor(changeAmount/5);
          this.setState({ fives: fiveDollarAmount});
          changeAmount = (changeAmount%5).toFixed(2);

          var dollarAmount = Math.floor(changeAmount/1);
          this.setState({ ones: dollarAmount});
          changeAmount = (changeAmount%1).toFixed(2);
                         
          var quarterAmount = Math.floor(changeAmount/.25);
          this.setState({ quarters: quarterAmount});
          changeAmount = (changeAmount%.25).toFixed(2);
   
          var dimeAmount = Math.floor(changeAmount/.10);
          this.setState({ dimes: dimeAmount});
          changeAmount = (changeAmount%.10).toFixed(2);
  
          var nickelAmount = Math.floor(changeAmount/.05);
          this.setState({ nickels: nickelAmount});
          changeAmount = (changeAmount%.05).toFixed(2);
  
          var pennyAmount = Math.floor(changeAmount/.01);
          this.setState({ pennies: pennyAmount});
          changeAmount = (changeAmount%.01).toFixed(2);
           
          console.log(this.state);
      }    
    }


render() {
return (
<div className="container-fluid">
<h1>Change Calculator</h1>
<hr></hr><br></br>
<div className="row">
  <div className="span4">
      <p>Enter Information</p>
      <div className="input">
        <h5>How much is due?</h5>
        <input type='number' name='amountDue' defaultValue={this.state.amountDue} onChange={this.changeAmountDue}/>
        <h5>How much was received?</h5>
        <input type='number' name='amountReceived' defaultValue={this.state.amountReceived} onChange={this.changeAmountReceived}/>
      </div><br></br>
      <button type="button" className="btn btn-primary btn-lg btn-block" onClick= {this.calculateChange}>Calculate</button>
  </div>
  <div className="span8">
      <div className="output">
        <div className="alert">
          <div className="alert-success">
            <p>The total change due is: ${this.state.changeDue} </p>
          </div>
        </div>
        <div className="container-3">
          <div className="denominations"><h5>Twenties</h5><p>{this.state.twenties}</p></div>
          <div className="denominations"><h5>Tens</h5><p>{this.state.tens}</p></div>
          <div className="denominations"><h5>Fives</h5><p>{this.state.fives}</p></div>
          <div className="denominations"><h5>Ones</h5><p>{this.state.ones}</p></div>
        </div>
        <div className="container-4">
          <div className="denominations"><h5>Quarters</h5><p>{this.state.quarters}</p></div>
          <div className="denominations"><h5>Dimes</h5><p>{this.state.dimes}</p></div>
          <div className="denominations"><h5>Nickels</h5><p>{this.state.nickels}</p></div>
          <div className="denominations"><h5>Pennies</h5><p>{this.state.pennies}</p></div>
        </div>
      </div>
    </div>
    </div>
  </div>
    );
    
  }
}

export default App;
