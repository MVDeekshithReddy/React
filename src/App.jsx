import Header from "./Header.jsx";
import Footer from './Footer.jsx';
import Food from "./Food.jsx";
import Car from "./Car.jsx";
import CompA from "./CompA.jsx";
import About from "./About.jsx";
import User from "./User.jsx";
import Message from "./Setstate/Message.jsx"
function App() {

  return(
    <>

  <User name='ajay'/>
    <Message />
    <Header />
    <About/>
 <Footer />
 <Food />
 <Car />
   <CompA />
    </>
  );
}

export default App;
