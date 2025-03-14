import { assets } from '@assets/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
    items-center justify-center gap-4'>
      <div>
        <Image src={assets.profileGD} alt='' className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'> 
        Hi! I'm Dane Persek <Image src={assets.hand_icon} alt=''
        className='w-6'/> </h3>

    <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
    Aspiring Web/App Developer!</h1>
    <p className='max-w-2xl mx-auto front-Ovo'>
        I am an aspiring web/application developer from Seal Beach California, currently an enrolled
        junior computer science student at High Point University! 
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'> 
            <a href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black 
            text-white flex items-center gap-2 dark:bg-transparent'
            > contact me <Image src={assets.right_arrow_white} 
            alt='' className='w-4'/></a>

            <a href="/Dane_Persek_Resume_ .pdf" download 
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black">
                 my resume <Image src={assets.download_icon} alt='' className='w-4'/
                 ></a>

        </div>
    </div>
  )
}

export default Header
