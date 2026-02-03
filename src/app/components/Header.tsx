import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Header() {

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='' className='w-32 rounded-full'/>
        </div>

        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Bonjour! Je suis RAHARIMALALA Maminirina Natacha 
            <Image src={assets.hand_icon} alt='' className='w-6 '/>
        </h3>

        <h2 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Developpeur Web Frontend basée à Antananarivo.
        </h2>

        <p className="max-w-2xl mx-auto font-Ovo">
            Actuellement étudiante en Trosième année de Licence en Intégration et Développement Web.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

            <a 
                href="#contact" 
                className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >
                Contactez-moi
                <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </a>
            <a 
                href="/resume.pdf" 
                className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
            >
                Mon CV
                <Image src={assets.download_icon} alt='' className='w-4'/>
            </a>

        </div>
        
    </div>
  )
}

export default Header
