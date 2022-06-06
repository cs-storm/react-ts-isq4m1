import { Component } from 'react';
import React = require('react');

interface Iuser {
  arg: number;
}

interface IProps {
  name: string;
  arg?: number;
  user?: Iuser;
}
//
interface IState {
  color: string;
}

export default class Storm extends Component<IProps, IState> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      color: 'red',
    };
  }

  change = () => {
    this.setState((state, props) => ({
      color: state.color === 'red' ? 'blue' : 'red',
    }));
  };

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.color,
          }}
        >
          {this.props.name}
        </div>
        <h2>{this.props.arg}</h2>
        <h2>{this.props.user?.arg}</h2>
        <button onClick={this.change}>改变颜色</button>
      </div>
    );
  }
}
