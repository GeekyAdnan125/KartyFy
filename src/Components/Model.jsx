import React from 'react'
import ChangeAddress from './ChangeAddress'
function Model({isModelOpen,setModelOpen}) {
  if(!isModelOpen) return null
  return (
    <div className='fixed  flex-1 bg-gray-500 bg-opacity-75 flex-center justify-center z-50'> 
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
            <button onClick={()=>setModelOpen(false)}
            className='absolute top-4 right-4 text-gray-300 text-3xl'>
                &times;
                </button>
            <ChangeAddress/>
        </div>
    </div>
  )
}

export default Model