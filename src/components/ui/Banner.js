import { useState, useEffect } from 'react';

import BannerData from '../data/Banners.json';

function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(BannerData);
  }, []);
  return (
    <div className='flex flex-col gap-y-6 '>
      <div className='flex'>
        {banners.map((banner, index) => (
          <img
            className=' h-[200px]    rounded-lg mr-4'
            src={banner.image}
            alt={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
