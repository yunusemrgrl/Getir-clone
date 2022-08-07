import { useState } from 'react';
import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';

function NavigationSlider() {
  const [selected, setSelected] = useState('TR');

  const phones = {
    AF: '+93',
    US: '+1',
    BE: '+32',
    TR: '+90',
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  };
  return (
    <div className='relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:insert-0 before:w-full before:h-full before:z-10'>
      <Slider {...settings}>
        <div>
          <img
            className='w-full  h-[500px] object-cover'
            src='https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg'
            alt='slider.img'
          />
        </div>
        <div>
          <img
            className='w-full  h-[500px] object-cover'
            src='https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg'
            alt='slider.img'
          />
        </div>
        <div>
          <img
            className='w-full  h-[500px] object-cover'
            src='https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg'
            alt='slider.img'
          />
        </div>
      </Slider>
      <div className='container flex items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
        <div className='flex flex-col gap-y-8'>
          <img
            className='w-[180px] h-[180px]'
            src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'
            alt='Logo'
          />
          <h3 className='text-4xl text-white font-semibold'>
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className='bg-gray-50 rounded-lg w-[400px] p-6 '>
          <h4 className='text-primary-brand-color  w-full text-center font-semibold mb-4'>
            Giriş yap veya kayıt ol
          </h4>
          <div className='grid gap-y-3'>
            <div className='flex gap-x-2 '>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                placeholder='Select Language'
                className='flag-select'
              />
              <label className='flex-1 relative group cursor-pointer block'>
                <input
                  required
                  className='h-14 px-4 w-full border-gray-200 border-2  bg-white rounded outline-none transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color peer text-sm focus:pt-2  valid:pt-2'
                />
                <span className='absolute flex items-center top-0 left-0 h-full px-4 text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs'>
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className=' bg-brand-yellow w-full h-12 text-center text-sm font-semibold transition-colors text-primary-brand-color rounded-lg hover:bg-primary-brand-color hover:text-brand-yellow'>
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationSlider;
