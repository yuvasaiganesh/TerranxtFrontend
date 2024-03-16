import { useContext ,useEffect, useState} from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom"
import ProductsGrid from "./components/ProductsGrid"
import axios from "axios"
import {Contextdata} from "./Context/FirstContext"
import Clothingsection from "./components/ClothingSection";
import AcessoriesSection from "./components/AccessoriesSection";
import GadgetsSection from "./components/GadgetsSection";
import JewellerrySection from "./components/JewellerySection";

function App(){
  let output=useContext(Contextdata)
  const [originalData,setOriginalData]=useState({"allproducts":[]})
  useEffect(() => {
    
    axios.get(`https://terranxtserver.onrender.com/`)
      .then(response => {setOriginalData(response.data)})
      .catch(error => console.error('Error fetching products:', error));
  }, []);
 
 console.log(originalData.allproducts)
  output.updataData(originalData.allproducts)
 
return(
  
    
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<ProductsGrid/>}/>
      <Route path="/clothing" element={<Clothingsection/>}/>
      <Route path="/jewellery" element={<JewellerrySection/>}/>
      <Route path="/accessories" element={<AcessoriesSection/>}/>
      <Route path="/gadgets" element={<GadgetsSection/>}/>
    </Routes>
    </BrowserRouter>

)
     
}
export default App