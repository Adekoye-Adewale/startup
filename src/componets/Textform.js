import React, { memo } from 'react'

const Texthtmlform = memo((props) => {
  return (
    <>
    <div className='container'>
    <div className="mb-3">
        <h1 className='my-5'>{props.heading}</h1>
            <label htmlfor="exampleformControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleformControlTextarea1" rows="15"></textarea>
        </div> 
    </div>
        
    </>
  )
})

export default Texthtmlform