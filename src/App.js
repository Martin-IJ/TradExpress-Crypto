import './App.css';
import BuyCrypto from './Component/BuyCrypto';
import Coin from './Component/Coin';
import CreateAccount from './Component/CreateAccount';
import Customers from './Component/Customers';
import Footerr from './Component/Footerr';
import Header from './Component/Header';
import NavbarPage from './Component/NavbarPage';
import WhyPage from './Component/WhyPage';


function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Header />
      <Coin />
      <WhyPage />
      <BuyCrypto />
      <CreateAccount />
      <Customers />
      <Footerr />
    </div>
  );
}

export default App;