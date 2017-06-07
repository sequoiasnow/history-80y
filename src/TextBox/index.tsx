import * as React from 'react'
import { cn } from '../lib/cn'
import './styles.scss'

interface TextBoxProps {
  size?: number, 
  color?: string,
  subTitle?: string,
  center?: boolean,
  full?: boolean
}


export const TextBox: React.SFC<TextBoxProps> = (props) => (
  <div className={cn('text-box', `text-box--${props.size}`, {
      'text-box--center': props.center,
      'text-box--full': props.full
    })}
       style={props.color ? { backgroundColor: props.color } : {} }> 
    <div className="text-box__content">
      {props.children} 
    </div>
    {props.subTitle && <div className="text-box__sub">{props.subTitle}</div>}
  </div>
)
