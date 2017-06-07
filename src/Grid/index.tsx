import * as React from 'react'
import { cn } from '../lib/cn'
import './styles.scss'


export const Grid: React.SFC<{}> = ({ children }) => (
  <div className="grid">
    {children}
  </div>
)

interface ColProps {
  width: number
}

export const Col: React.SFC<ColProps> = (props) => (
    <div className={cn('col', `col--${props.width}`)}>
      {props.children}
    </div>
)

interface RowProps {
  height: number,
  img?: string 
}

export const Row: React.SFC<RowProps> = (props) => (
      <div className={cn('row', `row--${props.height}`)}
           style={props.img ? ({ backgroundImage: `url(${props.img})` }) : ({})}>
        {props.children}
      </div>
)
