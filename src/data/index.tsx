import * as React from 'react'
import { sequoiaData } from './sequoia'
import { johnData } from './john'
import { milesData } from './miles'
import { daphneData } from './daphne'
import { monicaData } from './monica'
import { sourceSlide } from './sources'
import { vanitySlide } from './vanity'

export const pages  = [ 
  ...sequoiaData,
  ...johnData,
  ...monicaData,
  ...milesData,
  ...daphneData,
  sourceSlide,
  vanitySlide
]
