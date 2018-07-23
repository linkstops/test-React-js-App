import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          reset
        </button>
        <br />
        {this.props.counters.map((counter, index) => (
          <Counter
            key={index}
            value={counter.value}
            id={counter.id}
            name={counter.name}
            counter={counter}
            onDelete={onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
