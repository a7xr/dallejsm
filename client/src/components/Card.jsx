import React from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ({_id, name, prompt, photo}) => {
  return ( 
    <div
        className='rounded-x1 group relative shadow-card hover:shadow-coardhover card'
    >
        <img src={photo} alt={prompt} className="w-full h-auto object-cover rounded-x1" />
        
    </div>
  )
}

export default Card