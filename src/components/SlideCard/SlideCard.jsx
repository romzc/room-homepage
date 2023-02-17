import React from 'react'
import ArrowIcon from "../../assets/icon-arrow.svg"
// Mobile
import MobileImage1 from "../../assets/mobile-image-hero-1.jpg"
import MobileImage2 from "../../assets/mobile-image-hero-2.jpg"
import MobileImage3 from "../../assets/mobile-image-hero-3.jpg"
// Desktop
import DesktopImage1 from "../../assets/desktop-image-hero-1.jpg"
import DesktopImage2 from "../../assets/desktop-image-hero-2.jpg"
import DesktopImage3 from "../../assets/desktop-image-hero-3.jpg"


// icons
import LeftIcon from "../../assets/icon-angle-left.svg"
import RightIcon from "../../assets/icon-angle-right.svg"

class ProductDetail {

  constructor ( title, imageMobile, imageDesktop, description ) {
    this.title = title
    this.imageMobile = imageMobile
    this.imageDesktop = imageDesktop
    this.description = description
  }
}

const SlideCard = () => {

  const product1 = new ProductDetail("Discover innovative ways to decorate",MobileImage1,DesktopImage1,"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.")
  const product2 = new ProductDetail("We are available all across the globe",MobileImage2,DesktopImage2,"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.")
  const product3 = new ProductDetail("Manufactured with the best materials",MobileImage3,DesktopImage3,"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.")
  const products = [product1, product2, product3]
  
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextProduct = () => {
    if( products.length-1 === currentIndex ) {
      setCurrentIndex(0)
    }
    else {
      setCurrentIndex(prev=>prev + 1)
    }
  }

  const prevProduct = () => {
    if(  0 === currentIndex ) {
      setCurrentIndex(products.length-1)
    }
    else {
      setCurrentIndex(prev=>prev - 1)
    }
  }

  const styleMobile = {
    backgroundImage: `url(${products[currentIndex].imageMobile})`,
  }

  const styleDesktop = {
    backgroundImage: `url(${products[currentIndex].imageDesktop})`,
  }

  return (
    <div className='slide_card'>
      
      
      <div className='image_container mobile' style={styleMobile}>
        <div className='button_container'>
          <button onClick={prevProduct}><img src={LeftIcon} alt="left" /></button>
          <button onClick={nextProduct}><img src={RightIcon} alt="right" /></button>
        </div>
      </div>

      <div className='image_container desktop' style={styleDesktop}>
        <div className='button_container'>
          <button onClick={prevProduct}><img src={LeftIcon} alt="left" /></button>
          <button onClick={nextProduct}><img src={RightIcon} alt="right" /></button>
        </div>
      </div>

      <div className='card'>
        <h2 className='text_second'>{products[currentIndex].title}</h2>
        <p className='text'>{products[currentIndex].description}</p>
        <a href="#">SHOP NOW <img src={ArrowIcon} alt="left-arrow"/></a>
      </div>
    </div>
  )
}

export { SlideCard }