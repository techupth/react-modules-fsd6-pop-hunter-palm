import "./App.css";
import Header from "./component/Header"
import MainContent from "./component/Main"
import Footer from "./component/Footer"
import ProductSection from "./component/ProductSec"
import FAQ from "./component/FAQ"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
      
      
    </div>
  );
}

export default App;