import * as React from 'react'
import { Spiral } from './Spiral'
import './styles.css'


const exampleData = [
  { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' },
  { title: 'Example thing', description: 'Some other stuff that we see is not real' },
  { title: 'I am the one', description: 'Mr. Anderson. I\'ve been expecting you' },
  { title: 'There is one thing', description: 'Death is the road to ave' },
  { title: 'What is life without death', description: 'rather boring to be honest' },
  { title: 'Hello God', description: 'It\'s me, Margret!' },
  { title: 'Where is my mind', description: 'All the animals are gone except for the fish' },
  { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' },
  { title: 'Example thing', description: 'Some other stuff that we see is not real' },
  { title: 'I am the one', description: 'Mr. Anderson. I\'ve been expecting you' },
  { title: 'There is one thing', description: 'Death is the road to ave' },
  { title: 'What is life without death', description: 'rather boring to be honest' },
  { title: 'Hello God', description: 'It\'s me, Margret!' },
  { title: 'Where is my mind', description: 'All the animals are gone except for the fish' }
]

export const App = () => (
  <div>
    <Spiral pages={exampleData} />
  </div>
)
