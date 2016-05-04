import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className="tip" style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}
