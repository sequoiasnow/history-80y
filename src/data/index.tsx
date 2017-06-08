import * as React from 'react'
import { sequoiaData } from './sequoia'
import { johnData } from './john'
import { milesData } from './miles'
import { daphneData } from './daphne'
import { monicaData } from './monica'

export const pages  = [ 
  ...sequoiaData,
  ...johnData,
  ...monicaData,
  ...milesData,
  ...daphneData
]
