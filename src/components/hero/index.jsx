import React from 'react'
import "./Hero.scss"
import heroSvg from "../../assets/images/hero/aple.svg"
import heroImg from "../../assets/images/hero/hero-img.png"
import heroVector from "../../assets/images/hero/Vector.svg"

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className='container hero__wrapper'>
                <div className='hero__info-boxes'>
                    <div className='hero__info-boxes__img'>
                        <img src={heroSvg} alt="Hero iphone-14 text img" />
                    </div>
                    <h1 className='hero__title'>Up to 10% off Voucher</h1>
                    <a className='hero__link' href="#">
                        <p>Shop Now</p>
                        <img src={heroVector} alt="hero vector img" />
                    </a>
                </div>
                <div className='hero__img-boxes'>
                    <img src={heroImg} alt="hero img" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero