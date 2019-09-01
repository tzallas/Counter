import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={this.props.onStoreResults}>Save</button>
        <ul>
          {this.props.strResult.map(rslt => (
            <li
              key={rslt.id}
              onClick={() => this.props.onDeleteResults(rslt.id)}
            >
              {rslt.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    strResult: state.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", val: 10 }),
    onSubCounter: () => dispatch({ type: "SUB", val: 15 }),
    onStoreResults: () => dispatch({ type: "STORE" }),
    onDeleteResults: id => dispatch({ type: "DELETE", resultELId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
