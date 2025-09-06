import { useState } from 'react'
import '../styles/Viewport.css'

function Viewport({ image }) {
  return (
    <div>
      {image ? (
        <img
          src={image}
          alt='Preview'
          className='max-w-full max-h-full object-contain'
        />
      ) : (
        <div className='select-none'>No image loaded</div>
      )}
    </div>
  )
}

export default Viewport
