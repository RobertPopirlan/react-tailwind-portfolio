import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactimage from '../assets/reactimage.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import solidworks from '../assets/solidworks.png'
import linux from '../assets/linux.png'
import catia from '../assets/catia.png'
import java from '../assets/java.png'



const Experience = () => {

const techs =[
    {
        id:1,
        src: html,
        title:'HTML',
        style:'shadow-orange-500'
    } ,
    {
        id:2,
        src: css,
        title:'CSS',
        style:'shadow-blue-500'
    },
    {
        id:3,
        src: javascript,
        title:'JAVASCRIPT',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src: reactimage,
        title:'React',
        style:'shadow-blue-600'
    },
    {
        id:5,
        src: tailwind,
        title:'tailwind',
        style:'shadow-sky-400'
    },
    {
        id:6,
        src: nextjs,
        title:'NextJS',
        style:'shadow-white'
    },
    {
        id:7,
        src:linux,
        title:'Linux',
        style:'shadow-yellow-500'
    },
    
    {
        id:8,
        src:github,
        title:'gitHub',
        style:'shadow-gray-400'
    },
    {
        id:9,
        src:solidworks,
        title:'SolidWorks',
        style:'shadow-red-600'
    }, {
        id:10,
        src:catia,
        title:'Catia',
        style:'shadow-blue-600'
    },
    {
        id:10,
        src:java,
        title:'Java',
        style:'shadow-red-700'
    },
   


]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full flex'>
        <div className='max-w-screen-lg mx-auto p-4  flex-col justify-center w-full h-sfull text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>This are some of the things i know (and some that i am working on)</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px012 sm:px-0'>
   
   {
    techs.map(({id,src,title,style}) =>(

        <div key={id} 
        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
        <img src={src} alt="" className='w-20 mx-auto'/>
        <p className='mt-4'>{title}</p>
    </div>
    
    )) 
    
   }

               
            </div>


        </div>

        
    </div>
    
  )
}

export default Experience