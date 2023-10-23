import { Avatar } from '@mui/material'
import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 

function TestimonialsSection() {

  const Data  = [
     {name:"Carlos pedro",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJZ9UrSk2UhXUvXJJNrcxIevMG1aPvcYonH1xrdIl3n7FlALxlTCwHSZO3N1AFMrE60o&usqp=CAU"},
     {name:"Sara Mateus",image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"},
     {name:"Steven Jobs",image:"https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D"},
     {name:"Kiame Mendes",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNthIGxTz7DB_i2wz08g7WP-1cl0Q6OoRWbA&usqp=CAU"},
     {name:"Jassinta Domingos",image:"https://www.westernunion.com/staticassets/content/dam/wu/jm/responsive/send-money-in-person-from-jamaica-resp.png"}
  ];


  return (
    <section className="recipe-testimonials">
       <div className="wrapper">
       <div className="title">
          <h2>What our customers Says About Us</h2>
         <div className="bar bg-main  animate__animated  animate__heartBeat"></div>
       </div>
       <aside className="testimonials">
       <Swiper  spaceBetween={50} slidesPerView={window.innerWidth <= 900 ? 1 : 3} >
      {Data.map((item, index)=>(
        <SwiperSlide key={index+1}>
          <article className="bg-white">
               <div className="stars d-flex">
                 <div className="full"><AiFillStar /></div>
                 <div className="full"><AiFillStar /></div>
                 <div className="full"><AiFillStar /></div>
                 <div className="heath"><AiFillStar /></div>
                 <div className="heath"><AiFillStar /></div>
               </div>
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Accusantium quis, aperiam voluptatibus quam voluptas ipsum!
               </p> 
             <div className="d-flex av">
                <Avatar sx={{width:60,height:60}} src={item.image}>CL</Avatar>
               <div className="ml-2"> <h6>{item.name}</h6></div>
             </div>
           </article>
          </SwiperSlide> 
        ))} 
       </Swiper> 
       </aside>
       </div>
    </section>
  )
}

export default TestimonialsSection