import React from 'react'
import Shopping1Card from './Shopping1Card'
import HeroShoppingImg from './HeroShoppingImg'
import { Shopping1Data } from './Shopping1Data'


const Shopping1 = () => {
  return (
    <div>
    <HeroShoppingImg/>
    <h1 className='font-bold text-xl mt-14 text-center'>Our Products</h1>
      <div className=' grid gap-12 grid-cols-1 px-10  pt-10 lg:grid-cols-3 md:grid-cols-2' >
    {
      Shopping1Data.map((value)=>{
    return(<Shopping1Card
      key={value.id}
      product={value.product}
      imgsrc={value.imgsrc}
      price={value.price}
      description={value.description}
      />)
      })
    }
    </div>
   
    </div>
  )
}

export default Shopping1