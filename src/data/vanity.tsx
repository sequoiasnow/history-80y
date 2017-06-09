declare function require(name:string): string

import * as React from 'react'
import { TextBox } from '../TextBox'

export const vanitySlide = {
  color: 'transparent',
  content: () => (
    <div>
      <TextBox full size={4}>
        Thanks for viewing, in case you haven't noticed, use arrow keys, clicking or scroll to navigate, click on ReadMore to look at the full essays on the topic.
      </TextBox>
      <div style={{
        position: 'absolute',
        top: '30px',
        right: '30px'
        }}>
          <span>Website by Sequoia Snow</span>
        </div>
    </div>
  )
}
