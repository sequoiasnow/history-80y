import * as React from 'react'
import './styles.scss'

export const ReadMore: React.SFC<{ onClick: () => void, text?: string }> = ({ onClick, text }) => (
  <button className="read-more" onClick={onClick}>
    {text || 'Read More'}
  </button>
)
