import { useNavigate } from "react-router-dom";
import "./index.css"
const ProductsGrid = () => {
  const navigate = useNavigate();

  const tonavigateClothing=() =>{
    navigate("/clothing");
  }
  const tonavigateJewellery=()=>{
    navigate("/jewellery")
  }
  const tonavigateGadgets=()=>{
    navigate("/gadgets")
  }
  const tonavigateAccessories=()=>{
    navigate("/accessories")
  }

  return (
    <div className="productSection">
      <h1 className="mainHeading">Select Your Category</h1>
      <div className="buttonSection">
      <div className="firstSection">
      <button onClick={tonavigateClothing}>Clothing</button>
      <button onClick={tonavigateJewellery}>Jewellery</button>
      </div>
      <div className="firstSection">
      <button onClick={tonavigateGadgets}>Electronic Gadgets</button>
      <button onClick={tonavigateAccessories}>Mens Accessories</button>
      </div>
      </div>
    </div>
  );
};
export default ProductsGrid  