import React from 'react'
import ImageLazyLoading from './Components/ImageLazyLoading'
const ImgPath  =  require("./Assets/images/1.png");


function NotFounded() {
  return (
    <div className='not-founded  animate__animated  animate__heartBeat'>
        <div className="text">
        <h1>4</h1>
          <ImageLazyLoading source={ImgPath} height={200} /> 
        <h1>4</h1>
        </div><br />
        <h4>Page Not Founded</h4>
    </div>
  )
}

export default NotFounded