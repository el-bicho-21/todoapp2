import React from 'react'

export default function Todo2({papa}) {
  return <div className='rounded-lg p-5 flex 
  align-middle content-center bg-white 
  shadow-md hover:scale-105 transition-all
  justify-between py-6'>
    <input type="checkbox" />
    <p>{papa}</p>
  </div>;
    
  
}
