import React from 'react'
import BlackChair from "../../assets/image-about-dark.jpg"
import LightChair from "../../assets/image-about-light.jpg"

const Detail = () => {
  return (
    <div className='bottom-information'>
      <div className='card'>
        <img className='image-about' src={BlackChair} alt="chair-black" />
      </div>
      <div className='card'>
        <h3 className='second-text'>about our furniture</h3>
        <p className='text'>
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
      <div className='card'>
        <img className='image-about' src={LightChair} alt="white-chair"/>
      </div>
    </div>
    
  )
}

export { Detail }