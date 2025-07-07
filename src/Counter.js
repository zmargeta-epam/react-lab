import React from 'react'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.count ?? 0,
    }
  }

  render() {
    return React.createElement('div', { className: 'counter' }, [
      this.state.count,
      React.createElement(
        'button',
        {
          key: '2',
          onClick: () => this.setState({ count: this.state.count + 1 }),
        },
        '+'
      ),
      React.createElement(
        'button',
        {
          key: '3',
          onClick: () => this.setState({ count: this.state.count - 1 }),
        },
        '-'
      ),
    ])
  }
}
