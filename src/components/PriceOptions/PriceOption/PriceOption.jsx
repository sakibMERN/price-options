import React from 'react'
import PropTypes from 'prop-types'
import Feature from '../../Feature/Feature';

export default function PriceOption({option}) {
    const {features, name, price} = option;
    console.log(option);
  return (
    <div className='bg-blue-500 rounded-md p-4 text-white space-y-4 flex flex-col'>
        <h2 className=''>
          <span className='text-7xl font-bold text-center'>{price}</span>
          <span className="text-2xl text-center">/month</span>

        </h2>
        <h4 className='3xl'>{name}</h4>
        
        <div className='grow'>
        {
          features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
        }
        </div>
        <button className='btn w-full bg-green-600 text-white hover:bg-green-800'>Buy Now</button>
    </div>
  )
}

PriceOption.propTypes = {
    option: PropTypes.object
}
