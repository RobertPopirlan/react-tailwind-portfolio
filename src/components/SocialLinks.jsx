import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { IoMailOutline } from "react-icons/io5";
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  const links =[
    {
    id:1,
    child: (
    
      <>
      LinkedIn<FaLinkedin size={30}/>
      </>

    ),
    href:'https://www.linkedin.com/in/popirlan-robert-3870aa274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    style:'rounded-tr-md',
  },

  {
    id:2,
    child:(

      <>Github<FaGithub size={30}/></>

    ),
    href:'https://github.com/RobertPopirlan',
  
  },

  {
    id:3,
    child:(
    
      <>Mail<IoMailOutline size={30}/></>

    ),
    href:'mailto:robert.popirlan@yahoo.com',

  },

  {
    id:4,
    child:(
    
      <>Resume<BsFillPersonLinesFill size={30}/></>

    ),
    href:'/Cv_Popirlan_Robert_Florin.pdf',
    style:'rounded-br-md',
    download:true,
  }
]

  return (
    <div className="hidden   lg:flex flex-col top-[35%] left-0 fixed"> 
<ul>
    {links.map(({id,child,href,style,download})=>(
         <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-transparent ml-[-100px] hover:ml-[-10px] hover:rounder-md duration-300'}>
         <a href={href}  className='flex justify-between items-center w-full text-white'download={download} target='_blank' >
         {child}
         </a>
         </li>

    ))}
 
</ul>
    </div>
  )
}

export default SocialLinks