import * as React from 'react'
import { Spiral } from './Spiral'
import { pages } from './data'
import './styles.css'


export const App = () => (
  <div>
    <Spiral pages={pages} />
  </div>
)
