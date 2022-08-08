import React from 'react';

function GooglePlay() {
  return (
    <div className='bg-gray-50 '>
      <div className='py-4 '>
        <div className='container mx-auto  bg-banner p-6 h-[312px]  bg-primary-brand-color rounded-lg flex justify-between items-center relative overflow-hidden'>
          <div className='text-white ml-12 flex-shrink-0  '>
            <h3 className='text-3xl font-semibold'>Getir'i indirin!</h3>
            <span className='block font-semibold mt-4'>
              İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
            </span>
            <nav className='flex gap-x-2 pt-8 '>
              <a href='/#' onClick={(e) => e.preventDefault()}>
                <img
                  src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
                  alt=''
                />
              </a>
              <a href='/#' onClick={(e) => e.preventDefault()}>
                <img
                  src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
                  alt=''
                />
              </a>
              <a href='/#' onClick={(e) => e.preventDefault()}>
                <img
                  src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'
                  alt=''
                />
              </a>
            </nav>
          </div>
          <picture className='-mb-3 -mr-6'>
            <img
              className='min-h-[300px] w-full object-cover'
              src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'
              alt=''
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default GooglePlay;
