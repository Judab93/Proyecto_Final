import React from 'react'
import heroImg02 from './../assets/images/hero-img02.jpg'
import heroImg01 from './../assets/images/hero-img01.png'
import heroImg03 from './../assets/images/hero-img03.png'
import icon01 from './../assets/images/icon01.png'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const Home =() => {
    return (
      <>
      {/*========hero========*/}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
     {/*========hero content========*/}
     <div>
      <div className="lg:w-[570px]">
        <h1 className ='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[600] md:leading-[70px]'>
Encuentra un Desarrollador para tus proyectos 
Facil y rapido!!
        </h1>
        <p className='text__para'>
          Somo una plataforma diseñada para autogestionar tus busquedas y acelerar tus procesos de contratacion. Explora nuestra base de datos con +2k desarrolladores y desarrolladoras
        </p>
        <button className='btn'>Solicitar</button>
      </div>

      <div className='mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
        <div>
          <h2 className='text -[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
            10+
          </h2>
          <span className='w-[100px] h-2 bg-yellowColor rounded-s-full block mt-[-14px]'> </span>
          <p className='text__para'>AÑOS DE EXPERIENCIA</p>
        </div>
        <div>
          <h2 className='text -[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
            1000+
          </h2>
          <span className='w-[100px] h-2 bg-irisBlueColor rounded-s-full block mt-[-14px]'> </span>
          <p className='text__para'>PROFESIONALES</p>
        </div>
        <div>
          <h2 className='text -[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
            5+
          </h2>
          <span className='w-[100px] h-2 bg-primaryColor rounded-s-full block mt-[-14px]'> </span>
          <p className='text__para'>PAISES</p>
        </div>

      </div>
     </div>


      {/*========hero content========*/}
      <div className="flex gap-[30px] justify-end">
        <div>
          <img className='w-full' src={heroImg02} alt="" />
        </div>
        <div className='mt-[30px]'>
          <img className='w-full mb-[30px]' src={heroImg01} alt="" />
          <img className='w-full' src={heroImg03} alt="" />
        </div>
      </div>
          </div>
        </div>
      </section>

      {/*========hero Section end========*/}


      {/*========hero Section ========*/}
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Reduce los tiempo de Contratacion
          </h2>
          <p className="text__para text-center">
            Desarrollamo un proceso de contratacion flexible y personalizada, enfocado en la calidad
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        <div className='py-[30px] px-5'>
          <div className="flex items-center justify-center">
            <img src={icon01} alt="" />
          </div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Encuentra un Desarrollador
            </h2>
            <p className="text-[16px] text-center leading-7 mt-4">
                Recibiremos tus requemrientos de talento y alinearemos nuestra base de datos de talentos
            </p>

            <Link
            to="/developers"
            className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none'
            >
            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>

        </div>
      </div>

      </>
    )
}

export default Home