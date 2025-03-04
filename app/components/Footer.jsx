import React from 'react'
import Image from 'next/image'
import { assets } from '@assets/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logoGD} alt='' className='w-36 mx-auto mb-2'/>

        <div className ='w-max flex items-center gap-2 mx-auto'> 
        <Image src={assets.mail_icon} alt='' className='w-6'/>
        dpersek@highpoint.edu
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t
    border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Dane Persek. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://www.instagram.com/dane_persek/">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/dane-persek/">LinkedIn</a></li>
                <li><a href="https://x.com/PersekDane">Twitter</a></li>
                <li><a href="https://github.com/Dpersek2/Dpersek-22.github.io">Github</a></li>
        </ul>
    </div>


    </div>
  )
}

export default Footer
