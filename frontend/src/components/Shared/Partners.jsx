import React from 'react'
import Marca1 from '../../assets/brand/br-1.png'
import Marca2 from '../../assets/brand/br-2.png'
import Marca3 from '../../assets/brand/br-3.png'
import Marca4 from '../../assets/brand/br-4.png'
import Marca5 from '../../assets/brand/br-5.png'
const Partners = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
        <div className="container">
            <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
                <img src={Marca1} alt="Marca" className='w-[80px] dark:invert'/>
                <img src={Marca2} alt="Marca" className='w-[80px] dark:invert'/>
                <img src={Marca3} alt="Marca" className='w-[80px] dark:invert'/>
                <img src={Marca4} alt="Marca" className='w-[80px] dark:invert'/>
                <img src={Marca5} alt="Marca" className='w-[80px] dark:invert'/>
            </div>
        </div>
    </div>
  )
}

export default Partners