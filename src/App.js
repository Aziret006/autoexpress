import Brands from "./components/Brands/Brands";
import CarShowroom from "./components/CarShowroom/CarShowroom";
import CardCar from "./components/CardCar/CardCar";
import Discount from "./components/Discount/Discount";
import Footer from "./components/Footer/Footer";
import FooterEnd from "./components/FooterEnd/FooterEnd";
import Header from "./components/Header/Header";
import HomePage from "./components/Home-Page/HomePage";
import Main from "./components/Main/Main";
import Payment from "./components/Payment/Payment";
import TextFields from "./components/Registration/TextFields";
import UserCard from "./components/User/UserCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Brands />
      <HomePage />
      <UserCard />
      <Payment />
      <TextFields />
      <Discount />
      <CardCar />
      <CarShowroom />
      <Footer />
      <FooterEnd />
    </div>
  );
}

export default App;
