import Banner from '../ui/Banner';
function Banners() {
  return (
    <div className='bg-gray-50 py-3'>
      <div className='container mx-auto'>
        <h3 className='text-sm mb-3 font-semibold text-gray-700'>
          Kampanyalar
        </h3>
        <Banner />
      </div>
    </div>
  );
}

export default Banners;
