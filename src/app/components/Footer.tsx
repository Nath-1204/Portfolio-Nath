import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


const Footer = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      
      <div className='mt-20'>
        <div className="text-center">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

            <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                natachamamynirina@gmail.com
            </div>
            <div className="w-max flex items-center gap-2 mx-auto">
                032 48 429 39 || 038 16 121 94
            </div> 
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>

            <p>&copy; {new Date().getFullYear()} Natacha Maminirina. All rights reserved.</p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Nath-1204">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/natacha-raharimalala">LinkedIn</a></li>
                <li><a target='_blank' href="https://www.facebook.com/in/natacha-raharimalala">Facebook</a></li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer
