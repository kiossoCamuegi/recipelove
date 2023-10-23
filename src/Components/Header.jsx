import React from 'react'
import ImageLazyLoading from './ImageLazyLoading'
import {BsFillPlayFill} from "react-icons/bs";
import DialogBox from './DialogBox';
const ImgPath  =  require("../Assets/images/4.webp");

function Header() {
  return (
   <div className="recipe-header">
      <div className='wrapper'>
        <div className="content">
        <div className="text">
            <h3 className='animate__animated  animate__rubberBand' >Enjoy</h3>
            <div className="title">
               <h4 className='animate__animated  animate__rubberBand'>Delicius Food In Your Healthy Life</h4>
               <div className="bar  animate__animated  animate__heartBeat bg-main"></div>
            </div>
            <p>
              RecipeLove is a trusted resource for home cooks with more than 3,000 tested recipes,
               guides, and meal plans, drawing over 15 million readers each month from around the world.
                We’re supported by a group of recipe developers, food writers,
                 recipe and product testers, photographers, and other creative.
            </p> 
            <div className="d-flex">
               <button className="btn bg-main text-dark">Explore Recipes</button>
                <DialogBox btn={
               <button className="ml-2 btn bg-black text-light">Top recipes<div className="icon bg-main ml-2"><BsFillPlayFill/> </div></button>
             } />  
            </div>
        </div>
        <div className="cover-image animate__animated animate__swing">
            <ImageLazyLoading source={ImgPath} height={200} /> 
        </div>
        </div>
      <div className="border bg-main"></div>
    </div> 
   </div>
  )
}

export default Header