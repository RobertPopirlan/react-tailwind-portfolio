import React from 'react'
import heroImage from '../assets/heroImage.png'
import { RiArrowRightSLine } from "react-icons/ri";
import {Link} from "react-scroll"
const Home = () => {


  
  return (
    <div name="home" class='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-0 md:flex-row'>
      <div className='flex flex-col justify-center h-full'>
        <h2 className='text-4xl sm:text-6xl font-bold text-white'>I'm a Full Stack Developer</h2>
        <p className='text-gray-500 py-4 max-w-md'>
While I may not possess any prior professional experience, I am wholeheartedly committed to acquiring new skills and knowledge, and I am genuinely enthusiastic about the prospect of learning and growing within the company.</p>
      <div>
        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' >
          Portofolio
          <span className='group-hover:rotate-90 duration-300'><RiArrowRightSLine size={25} className='ml-1'/></span>
        </Link>
      </div>
      </div>
      <div className='rounded-[9%_91%_23%_77%/79%_23%_77%_21%]  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-300 via-cyan-400 to-purple-400 overflow-hidden  shadow-lg shadow-cyan-500 h-auto'>
        <img src={heroImage} alt='my profile' class=" rounder-2xl mx-auto w-2/3 md:w-full"></img>
      </div>
    </div>
    </div>
  )
}

export default Home