import React from 'react'
import ImageLazyLoading from './ImageLazyLoading';

const ImgPath = "https://assets.bonappetit.com/photos/5f3bffa3b62c45d85d5245df/16:9/w_1280,c_limit/Stop-Cooking-Like-a-Chef-Meherwan-Irani.jpg";

function NewsLetterSection() {
  return (
    <div className='wrapper'>
        <div className="newsletter-section">
           <ImageLazyLoading source={ImgPath} height={400} /> 
           <div className="over">
               <div className="title">
                  <h1 className='text-light'>Join our Member Get 30% Discount</h1> 
               </div>
               <br />
               <div className="form-area">
                   <input type="text" placeholder='Enter your email'  className="form-control" />
                   <button className="btn bg-main text-dark btn-radius">Submit</button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default NewsLetterSection