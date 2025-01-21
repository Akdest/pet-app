import Footer from '@/app/component/Footer'
import NavbarOther from '@/app/component/NavbarOther'
import ProductList from '@/app/component/ProductList'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
      <NavbarOther/>
          <ProductList/>
      <Footer/>
    </div>
  )
}

export default page
