import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, name: "uc" },
      { id: 2, value: 0, name: "keybord" },
      { id: 3, value: 0, name: "monitor" },
      { id: 4, value: 1, name: "mouse" }
    ]
  };
  handleIncrement = counter => {
    console.log("///////// ", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //this.state.count++; react doesnt allow thhis
    counters[index] = { ...counter }; //clone the param counter
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDelete = counterID => {
    console.log(" remove call ", counterID);
    // creation nouveaux counters with out deleted element & update the state

    const counters = this.state.counters.filter(c => c.id !== counterID);
    //this.state.count++; react doesnt allow thhis
    this.setState({ counters: counters });
  };
  handleReset = () => {
    console.log(" reset call ");
    // creation nouveaux counters with out deleted element & update the state

    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalcounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="card">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
