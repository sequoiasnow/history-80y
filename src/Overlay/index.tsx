import * as React from 'react'
import './styles.scss'

export class Overlay extends React.Component<{ onClose: () => void }, {}> {
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
