import * as React from 'react'
import './styles.scss'

export const Background: React.SFC<{ img?: string, color?: string }> = (props) => (
  <div className="full-background"
       style={props.img ? { backgroundImage: `url(${props.img})` } : { backgroundColor: props.color }}>
    {props.children}
  </div>
)
