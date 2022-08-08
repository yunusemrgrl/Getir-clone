import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
function Contacts() {
  return (
    <div className='bg-white border py-6'>
      <div className='container mx-auto '>
        <div className='flex justify-between border-gray-300 border-opacity-30  '>
          <div className='text-sm text-gray-700 flex gap-x-8 items-center'>
            &copy; 2021 Getir
            <a
              href='/#'
              onClick={(e) => e.preventDefault()}
              className='text-primary-brand-color relative before:w-1 before:h-1 before:bg-gray-600 before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full'
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className='flex gap-x-4'>
            <a
              href='/#'
              onClick={(e) => e.preventDefault()}
              className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color'
            >
              <BsFacebook size={20} />
            </a>
            <a
              href='/#'
              onClick={(e) => e.preventDefault()}
              className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color'
            >
              <BsTwitter size={20} />
            </a>
            <a
              href='/#'
              onClick={(e) => e.preventDefault()}
              className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color'
            >
              <FaInstagram size={20} />
            </a>
            <a
              href='/#'
              onClick={(e) => e.preventDefault()}
              className='h-8 transition-colors flex items-center px-2 border border-gray-100 gap-x-2 text-sm rounded text-gray-500 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color
              hover:border-transparent'
            >
              <TbWorld size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
