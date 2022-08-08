import Header from './components/Header';
import NavigationSlider from './components/NavigationSlider';
import Categories from './components/Categories';
import Banners from './components/Banners';
import MobileApp from './components/MobileApp';
import Cards from './components/Cards';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts';
function App() {
  return (
    <>
      <Header />
      <NavigationSlider />
      <main>
        <Categories />
        <Banners />
        <MobileApp />
        <Cards />
      </main>
      <Footer />
      <Contacts />
    </>
  );
}

export default App;
