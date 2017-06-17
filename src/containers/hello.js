import React from 'react'

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isCool: 'false' }
  }
  render() {
    return (
      <div>
        <h1>
          Hello, {this.props.firstName}
        </h1>

      </div>
    )
  }
}
export default Hello
