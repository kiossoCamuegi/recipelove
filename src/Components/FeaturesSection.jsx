import React from 'react';
import {PiBowlFood, PiForkKnifeDuotone} from "react-icons/pi";
import {IoFastFoodOutline} from "react-icons/io5"; 

function FeaturesSection() {
    const items = [
        {
            icons:<PiBowlFood/>,
            title:"Dinner recipes",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icons:<IoFastFoodOutline/>,
            title:"Lunch meals",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icons:<PiForkKnifeDuotone/>,
            title:"Qick plates",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];
  return (
    <section className='bg-black recipe-features animate__animated animate__animated '>
        <aside className="wrapper">
            <div className="items">
              {items.map((item,index)=>{
                    return( <article key={index} className={`it-${index+1}`} > 
                        <div className="ct">
                           <div className="icon">{item.icons}</div>
                           <h3>{item.title}</h3>
                           <small className="text-light">{item.description}</small>
                        </div>
                    </article> )
                })}
            </div>
        </aside>
    </section>
  )
}

export default FeaturesSection