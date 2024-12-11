import React from 'react'
import Heading from '../Shared/Heading'
import ProductsCard from './ProductsCard'
import img1 from '../../assets/product/p-1.jpg';
import img2 from '../../assets/product/p-2.jpg';
import img3 from '../../assets/product/p-3.jpg';
import img4 from '../../assets/product/p-4.jpg';
import img5 from '../../assets/product/p-5.jpg';
import img6 from '../../assets/product/p-7.jpg';
import img7 from '../../assets/product/p-9.jpg';
import img8 from '../../assets/product/p-8.jpg';
const ProductData = [
    
        {
            id: 1,
            img: img1,
            title: "Sony WH-1000XM5",
            price: "$70.000",
            aosDelay: 1,
        },
        {
            id: 2,
            img: img2,
            title: "Bose QuietComfort 45",
            price: "$80.000",
            aosDelay: 1,
        },
        {
            id: 3,
            img: img3,
            title: "Sennheiser Momentum 4",
            price: "$45.500",
            aosDelay: 1,
        },
        {
            id: 4,
            img: img4,
            title: "Apple AirPods Max",
            price: "$53.200",
            aosDelay: 1,
        }, 
        {
            id: 5,
            img: img5,
            title: "Bang & Olufsen Beoplay H95",
            price: "$150.000",
            aosDelay: 1,
        }, 
        {
            id: 6,
            img: img6,
            title: "Jabra Elite 85h",
            price: "$78.000",
            aosDelay: 1,
        }, 
        {
            id: 7,
            img: img7,
            title: "AKG N700NC M2",
            price: "$63.000",
            aosDelay: 1,
        }, 
        {
            id: 8,
            img: img8,
            title: "Shure AONIC 50",
            price: "$91.000",
            aosDelay: 1,
        },
        
]

const Product = () => {
  return (
    <div>
        <div className='container dark:text-white'>
            
            <Heading title="Nuestros Productos" subtitle="Explore Los Productos Mas Buscados"/>
            
            <ProductsCard data={ProductData} />
            
        </div>
    </div>
  )
}

export default Product