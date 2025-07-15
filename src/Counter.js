import './Counter.css'
import React from 'react'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.initialValue,
    }
  }

  increment = () => this.setState({ value: this.state.value + 1 })

  decrement = () => this.setState({ value: this.state.value - 1 })

  render() {
    return React.createElement('div', { className: 'counter' }, [
      this.state.value,
      React.createElement(
        'button',
        {
          key: 'Up',
          onClick: () => {
            this.increment()
          },
        },
        '+'
      ),
      React.createElement(
        'button',
        {
          key: 'Down',
          onClick: () => {
            this.decrement()
          },
        },
        '-'
      ),
    ])
  }
}

Counter.defaultProps = {
  initialValue: 0,
}
