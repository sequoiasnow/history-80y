import * as React from 'react'
import './styles.scss'

export class Overlay extends React.Component<{ onClose: () => void }, {}> {
  componentDidMount() {
    window.addEventListener('mousedown', this.props.onClose)
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.props.onClose)
  }

  render() {
    return (
      <div className="overlay">
        <div className="overlay__close" onClick={this.props.onClose} />
        <div className="overlay__content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
