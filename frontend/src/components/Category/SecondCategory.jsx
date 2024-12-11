import React from 'react'
import Button from '../Shared/Button'
import Imagen4 from '../../assets/category/gaming.png'
import Imagen5 from '../../assets/category/vr.png'
import Imagen6 from '../../assets/category/speaker.png'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Disfruta</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Con</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-[2px]'>Consola</p>
                            <Button 
                                text="Acceder"
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Imagen4} alt="" className='w-[340px] absolute top-1 translate-y-0 -right-0'/>
                </div>

                
                <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Disfruta</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Con</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Realidad Virtual</p>
                            <Button 
                                text="Acceder"
                                bgColor={"bg-white"}
                                textColor={"text-brandGreen"}
                            />
                        </div>
                    </div>
                    <img src={Imagen5} alt="" className='w-[250px] absolute bottom-0 -right-1'/>
                </div>

                
                <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Disfruta</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Con</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Parlantes</p>
                            <Button 
                                text="Acceder"
                                bgColor={"bg-white"}
                                textColor={"text-brandBlue"}
                            />
                        </div>
                    </div>
                    <img src={Imagen6} alt="" className='w-[270px] absolute -right-1 lg:top-[85px] '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category;
