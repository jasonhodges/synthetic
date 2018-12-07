import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Nexus from "../scripts/NexusUI";

class Dial extends Component {
  static propTypes = {
    size: PropTypes.arrayOf(PropTypes.number),
    interaction: PropTypes.string,
    mode: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number
  };

  static defaultProps = {
    size: [75, 75],
    interaction: "radial",
    mode: "relative",
    min: 0,
    max: 1,
    step: 0,
    value: 0
  };

  state = {
    id: null
  };

  componentWillMount = () => {
    this.setState({ id: this.props.id });
  };

  onChange = value => {
    console.log(`Dial value changed: ${value}`);
    // You could pass in a callback via props to pass value to parent ...
    //  this.props.onChange(value)
  };

  componentDidMount = () => {
    const dial = new Nexus.Dial(`#${this.state.id}`, {
      size: this.props.size,
      interaction: this.props.interaction, // "radial", "vertical", or "horizontal"
      mode: this.props.mode, // "absolute" or "relative"
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      value: this.props.value
    });
    dial.on("change", this.onChange);
  };

  render() {
    return <div id={this.state.id} />;
  }
}

export default Dial;
