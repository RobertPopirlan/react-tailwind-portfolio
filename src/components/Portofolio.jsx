import React from 'react';
import arrayDestruct from'../assets/portfolio/arrayDestruct.jpg';
import installNode from'../assets/portfolio/installNode.jpg';
import navbar from'../assets/portfolio/navbar.jpg';
import reactParallax from'../assets/portfolio/reactParallax.jpg';
import reactSmooth from'../assets/portfolio/reactSmooth.jpg';
import clockApp from'../assets/portfolio/clockApp.png';

const Portofolio = () => {
    const portfolios=[
        {id:1,
        src:arrayDestruct,
        link:'https://github.com/RobertPopirlan/clock-digital',
        link2:'https://656deb5214d20304ba1c704b--monumental-medovik-05d457.netlify.app'


    },
     {id:2,
        src:installNode,
        link:'https://github.com/RobertPopirlan/clock-digital',
        link2:'https://656deb5214d20304ba1c704b--monumental-medovik-05d457.netlify.app'

    },
    {id:3,
        src:navbar,
        link:'https://github.com/RobertPopirlan/clock-digital',
        link2:'https://656deb5214d20304ba1c704b--monumental-medovik-05d457.netlify.app'


    },
    {id:4,
        src:reactParallax,
        link:'https://github.com/RobertPopirlan/clock-digital',
        link2:'https://656deb5214d20304ba1c704b--monumental-medovik-05d457.netlify.app'


    },
    {id:5,
        src:reactSmooth,
        link:'https://github.com/RobertPopirlan/clock-digital',
        link2:'https://656deb5214d20304ba1c704b--monumental-medovik-05d457.netlify.app'


    },
    {id:6,
        src:clockApp,
        link:'https://github.com/RobertPopirlan/clock-digital',
        link2:'https://656deb5214d20304ba1c704b--monumental-medovik-05d457.netlify.app'

    },
   

    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white  '>

<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
<div className='pb-0'>
<p className='text-4xl font-bold inline border-b-4 px-2'>Portfolio</p>
<p className='py-6'>My work not actualy</p>


<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
{
portfolios.map(({id,src,link,link2})=>(
    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
        <div className='flex items-center justify-center'>
    <a  href={link}><button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
   <a href={link2}> <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code</button></a>

        </div>
    </div>

))
}
    
</div>

</div>

</div>


    </div>
  )
}


export default Portofolio