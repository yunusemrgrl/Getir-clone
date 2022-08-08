import React from 'react';
import Menu from '../ui/Menu';

function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: 'Hakkımızda',
        },
        {
          title: 'Kariyer',
        },
        {
          title: 'Teknoloji Kariyerleri',
        },
        {
          title: 'İletişim',
        },
        {
          title: 'Sosyal Sorumluluk Projeleri',
        },
      ],
    },
    {
      title: 'Yardıma mı ihtiyacınız var?',
      items: [
        {
          title: 'Sıkça Sorulan Sorular',
        },
        {
          title: 'Kişisel Verilerin Korunması',
        },
        {
          title: 'Gizlilik Politikası',
        },
        {
          title: 'Kullanım Koşulları',
        },
        {
          title: 'Çerez Politikası',
        },
      ],
    },
    {
      title: 'İş Ortağımız Olun',
      items: [
        {
          title: 'Bayimiz Olun',
        },
        {
          title: 'Deponuzu Kiralayın',
        },
        {
          title: 'GetirYemek Restoranı Olun',
        },
        {
          title: 'GetirÇarşı İşletmesi Olun',
        },
        {
          title: 'Zincir Restoranlar',
        },
      ],
    },
  ];
  return (
    <div className='bg-white pb-5'>
      <div className='container mx-auto pt-10 flex flex-col '>
        <div className='grid grid-cols-4 gap-x-6 '>
          <section>
            <nav className='flex flex-col gap-y-4  pb-6 '>
              <span className='text-lg text-primary-brand-color'>
                Getir'i indirin!
              </span>
              <nav className='flex flex-col gap-y-4 flex-shrink-0'>
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
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
