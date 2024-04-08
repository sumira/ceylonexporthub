import React from 'react'
import './productCategory.css'
import img1 from '../../components/assests/1.jpeg'
import img2 from '../../components/assests/2.jpeg'
import img3 from '../../components/assests/3.jpeg'
import img4 from '../../components/assests/4.jpeg'
import img5 from '../../components/assests/5.jpeg'
import img6 from '../../components/assests/6.jpeg'
import img7 from '../../components/assests/7.jpeg'
import img8 from '../../components/assests/8.jpeg'
import img9 from '../../components/assests/9.jpeg'
import img10 from '../../components/assests/10.jpeg'
import img11 from '../../components/assests/11.jpeg'
import img12 from '../../components/assests/12.jpeg'
import img13 from '../../components/assests/13.jpeg'
import img14 from '../../components/assests/14.jpeg'
import img15 from '../../components/assests/15.jpeg'
import img16 from '../../components/assests/16.jpeg'
import img17 from '../../components/assests/17.jpeg'
import services1 from '../../components/assests/1.1.png'
import services2 from '../../components/assests/1.2.png'
import services3 from '../../components/assests/1.3.png'
import services4 from '../../components/assests/1.4.png'
import services5 from '../../components/assests/1.5.png'

const ProductCategory = () => {
  const products = [
    { name: 'Antique', image: img1},
    { name: 'Ayurvedic Product', image: img2},
    { name: 'Bathik Items', image: img3},
    { name: 'Ceylon Tea', image: img4},
    { name: 'Clay Products', image: img5},
    { name: 'Coconut & Based Products', image: img6},
    { name: 'Dumbara Mats & Cane Boxes', image: img7 },
    { name: 'Flours', image: img8},
    { name: 'Gems & Juwellery', image: img9},
    { name: 'Handlooms', image: img10 },
    { name: 'Natural Healthy Products', image: img11},
    { name: 'Poicelain Tableware', image: img12 },
    { name: 'Rubber', image: img13},
    { name: 'Spieces', image: img14},
    { name: 'Traditional Marks', image:img15 },
    { name: 'Traditional Organic Rice', image:img16 },
    { name: 'Wood Carving', image: img17},
  ];
  const services = [
    { name:'Made in Sri Lanka', image: services5},
    { name: 'Great Value', image: services4 },
    { name:'Worldwide Delivery', image: services3},
    { name:'Safe Payments', image: services2},
    { name:'24/7 Help Center', image: services1}
  ]
  return (
    <div>
    <div className='product-grid'>
      {products.map((products, index) => (
        <div className='product-item' key={index}>
          <img src={products.image} alt='' className='productImage' />
          <span className='productName'>{products.name}</span>
        </div>
      ))}
    </div>

    <div className='service-grid'>
      {services.map((service, index) => (
        <div className='service' key={index}>
        <div className='box'>
          <img src={service.image} alt='' className='serviceImage' />
          <span className='serviceName'>{service.name}</span>
        </div> 
        </div>
      ))}
      </div>
    </div>

  )
}
export default ProductCategory