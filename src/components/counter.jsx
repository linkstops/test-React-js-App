import React, { Component } from "react";
export class Counter extends Component {
  // state = {
  // value: this.props.value,
  //  tags: ["tag1", "tag2", "tag3", "33"]
  // };
  styles = {
    fontSize: 12,
    fonWeight: "bold",
    align: "left"
  };

  render() {
    console.log("props ", this.props);
    return (
      <div className="container fluid">
        <h4>{this.props.name}</h4>
        <img src="" alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>
        <br />
        {/* this.state.tags.length === 0 && "please create new tags" */}
        {/* this.renderTags() */}
      </div>
    );
  }

  /* renderTags() {
    if (this.state.tags.length === 0) return <p>no tags found !</p>;

    return (
      <ul>{this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
    );
  }*/

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 1 ? "zero" : value;
  }
}

export default Counter;
