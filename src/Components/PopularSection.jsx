import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ImageLazyLoading from './ImageLazyLoading';
import {GrView} from "react-icons/gr";

function PopularSection() {
const [ActiveTab, setActiveTab] = useState(1);

const Data = [
    {
        image:"https://pnghq.com/wp-content/uploads/download-free-food-plate-diet-png-images-8.png",
        title:"salad with caramelo",
        link:"#",
        short:"the best dish of america"
    },
    {
        image:"https://media.istockphoto.com/id/848140072/pt/foto/breakfast-vegan-plate.jpg?s=170667a&w=0&k=20&c=2kzUcQQa0KhW_6zsDIl7_txcO2wnNsGPW3F1WzKJiPQ=",
        title:"salad with caramelo",
        link:"#",
        short:"the best dish of america"
    },
    {
        image:"https://png.pngitem.com/pimgs/s/87-875550_veggie-taco-hash-veggie-taco-hash-snap-kitchen.png",
        title:"salad with caramelo",
        link:"#",
        short:"the best dish of america"
    },
    {
        image:"https://food-guide.canada.ca/sites/default/files/styles/square_400_x_400/public/2020-12/CFGPlate-crop400x400.jpg",
        title:"salad with caramelo",
        link:"#",
        short:"the best dish of america"
    },
]

  return (
    <div className="wrapper">
         <section className='recipe-popular'>
        <div className="title">
         <div className="ct">
            <h1>Popular dishes</h1>
            <div className="bar bg-main"></div>
         </div>
        </div>
         <ul className="popular-tabs">
            <li onClick={()=>setActiveTab(1)} className={ActiveTab === 1 ? `active` : ``}>Seafood</li>
            <li onClick={()=>setActiveTab(2)} className={ActiveTab === 2 ? `active` : ``}>Soup</li>
            <li onClick={()=>setActiveTab(3)} className={ActiveTab === 3 ? `active` : ``}>Rice</li>
            <li onClick={()=>setActiveTab(4)} className={ActiveTab === 4 ? `active` : ``}>Chicken</li>
            <li onClick={()=>setActiveTab(5)} className={ActiveTab === 5 ? `active` : ``}>Beef</li>
         </ul>
         <aside className={ActiveTab === 1 ? `active` : ``}>
            {Data.map((item, index)=>{
              return(
                <article key={index}>
                   <Link to={item.link}><div className="view bg-main"><GrView/></div></Link>
                    <div className="image">
                      <ImageLazyLoading source={item.image} height={200} /> 
                    </div>
                    <Link to={item.link} ><h4>{item.title}</h4></Link>
                    <small>{item.short}</small>
                </article>
             )
            })}
         </aside>
         <aside className={ActiveTab === 2 ? `active` : ``}>
         {Data.map((item, index)=>{
             return(
                <article key={index}>
                   <Link to={item.link}><div className="view bg-main"><GrView/></div></Link>
                    <div className="image">
                      <ImageLazyLoading source={item.image} height={200} /> 
                    </div>
                    <Link to={item.link} ><h4>{item.title}</h4></Link>
                    <small>{item.short}</small>
                </article>
             )
            })}
         </aside>
         <aside className={ActiveTab === 3 ? `active` : ``}>
         {Data.map((item, index)=>{
             return(
                <article key={index}>
                   <Link to={item.link}><div className="view bg-main"><GrView/></div></Link>
                    <div className="image">
                      <ImageLazyLoading source={item.image} height={200} /> 
                    </div>
                    <Link to={item.link} ><h4>{item.title}</h4></Link>
                    <small>{item.short}</small>
                </article>
             )
            })}
         </aside>
         <aside className={ActiveTab === 4 ? `active` : ``}>
         {Data.map((item, index)=>{
              return(
                <article key={index}>
                   <Link to={item.link}><div className="view bg-main"><GrView/></div></Link>
                    <div className="image">
                      <ImageLazyLoading source={item.image} height={200} /> 
                    </div>
                    <Link to={item.link} ><h4>{item.title}</h4></Link>
                    <small>{item.short}</small>
                </article>
              )
            })}
         </aside>
         <aside className={ActiveTab === 5 ? `active` : ``}>
         {Data.map((item, index)=>{
               return(
                  <article key={index}>
                     <Link to={item.link}><div className="view bg-main"><GrView/></div></Link>
                      <div className="image">
                        <ImageLazyLoading source={item.image} height={200} /> 
                      </div>
                      <Link to={item.link} ><h4>{item.title}</h4></Link>
                      <small>{item.short}</small>
                  </article>
               )
            })}
         </aside>
         <div className="center">
            <Link to="recipes"><button className="btn bg-main text-dark">See More</button></Link>
         </div>
    </section>
    </div>
  )
}

export default PopularSection