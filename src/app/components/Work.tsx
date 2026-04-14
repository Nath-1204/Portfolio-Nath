import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'


const Work = ({ isDarkMode }) => {

    const [seeMore, setSeeMore] = useState(false);

    const worksData = workData.map((project, index)=>(

        <div 
            key={index} 
            className='aspect-square h-full w-full bg-no-repeat bg-contain bg-center rounded-lg relative cursor-pointer group border border-zinc-400 dark:border-white' 
            style={{backgroundImage: `url(${project.bgImage})`}}
        >
            <div 
                className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 
                flex items-center justify-between duration-500 group-hover:bottom-9'
            >
                <div>
                    <h2 className='font-semibod'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div 
                    className='border rounded-full border-black w-9 aspect-square flex items-center justify-center 
                    shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'
                >
                    <Image src={assets.send_icon} alt='send icon ' className='w-3'/>
                </div>
            </div>
                    
        </div>
    ))

  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

        <h4 className='text-center mb-2 text-lg font-Ovo'>Mes Compétences</h4>
        <h2 className='text-center text-5xl font-Ovo'>Mon Projet</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5 dark:text-black'>
            {
                seeMore ? worksData : worksData.slice(0, 4)
            }
        </div>

        <button
            onClick={() => setSeeMore(!seeMore)}
            className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full 
            py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
        >
            {seeMore ? "Voir Moins" : "Voir Plus"}
            <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' 
                className='w-4'
            />
        </button>

    </div>
  )
}

export default Work
